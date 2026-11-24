using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Hightouch.Core;
using Hightouch.Core.Exceptions;
using Hightouch.Core.Models;
using Hightouch.Core.Request;
using Hightouch.Core.Response;
using Hightouch.Errors;
using Hightouch.Models.AnyOf;
using Hightouch.Requests.DecisionEngine;

namespace Hightouch.Api;

public sealed class DecisionEngine
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal DecisionEngine(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Clone Decision Engine Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DecisionEngineFlowMessagesCloneResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloneMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Clone a message within a flow. The copy keeps the source message's
    /// config, tags, guardrails, and variables, and is created disabled.
    /// </remarks>
    public Task<DecisionEngineFlowMessagesCloneResponse> CloneMessage(CloneMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/decision-engine/flow/{flowId}/messages/{messageId}/clone"),
            [new TemplateParam("flowId", request.FlowId), new TemplateParam("messageId", request.MessageId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DecisionEngineFlowMessagesCloneResponse>(),
            CloneMessageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create Decision Engine Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DecisionEngineFlowMessagesResponse11"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a message in a flow
    /// </remarks>
    public Task<DecisionEngineFlowMessagesResponse11> CreateMessage(CreateMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/decision-engine/flow/{flowId}/messages"),
            [new TemplateParam("flowId", request.FlowId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DecisionEngineFlowMessagesResponse11>(),
            CreateMessageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Decision Engine Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DecisionEngineFlowMessagesResponse13"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a message. The message is soft-deleted and disabled in the flow,
    /// so it is no longer returned by the API and is ineligible for future sends.
    /// </remarks>
    public Task<DecisionEngineFlowMessagesResponse13> DeleteMessage(DeleteMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/decision-engine/flow/{flowId}/messages/{messageId}"),
            [new TemplateParam("flowId", request.FlowId), new TemplateParam("messageId", request.MessageId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<DecisionEngineFlowMessagesResponse13>(),
            DeleteMessageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Decision Engine Flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DecisionEngineFlowResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a decision engine flow by ID
    /// </remarks>
    public Task<DecisionEngineFlowResponse> GetFlow(GetFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/decision-engine/flow/{flowId}"),
            [new TemplateParam("flowId", request.FlowId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DecisionEngineFlowResponse>(),
            GetFlowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Decision Engine Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DecisionEngineFlowMessagesResponse11"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single message by flow and message ID
    /// </remarks>
    public Task<DecisionEngineFlowMessagesResponse11> GetMessage(GetMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/decision-engine/flow/{flowId}/messages/{messageId}"),
            [new TemplateParam("flowId", request.FlowId), new TemplateParam("messageId", request.MessageId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DecisionEngineFlowMessagesResponse11>(),
            GetMessageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Decision Engine Flows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DecisionEngineFlowsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListFlowsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List decision engine flows in the workspace
    /// </remarks>
    public Task<DecisionEngineFlowsResponse1> ListFlows(ListFlowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/decision-engine/flows"),
            [],
            [
                new Param("name", request.Name),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("orderBy", request.OrderBy),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DecisionEngineFlowsResponse1>(),
            ListFlowsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Decision Engine Messages
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DecisionEngineFlowMessagesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMessagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List messages for a flow
    /// </remarks>
    public Task<DecisionEngineFlowMessagesResponse1> ListMessages(ListMessagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/decision-engine/flow/{flowId}/messages"),
            [new TemplateParam("flowId", request.FlowId)],
            [new Param("limit", request.Limit), new Param("offset", request.Offset)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<DecisionEngineFlowMessagesResponse1>(),
            ListMessagesError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger Decision Engine Flow Run
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DecisionEngineFlowRunResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RunFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Trigger a decision engine run for a specific flow
    /// </remarks>
    public Task<DecisionEngineFlowRunResponse> RunFlow(RunFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/decision-engine/flow/{flowId}/run"),
            [new TemplateParam("flowId", request.FlowId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<DecisionEngineFlowRunResponse>(),
            RunFlowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Decision Engine Message
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DecisionEngineFlowMessagesResponse11"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a message
    /// </remarks>
    public Task<DecisionEngineFlowMessagesResponse11> UpdateMessage(UpdateMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/decision-engine/flow/{flowId}/messages/{messageId}"),
            [new TemplateParam("flowId", request.FlowId), new TemplateParam("messageId", request.MessageId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DecisionEngineFlowMessagesResponse11>(),
            UpdateMessageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
