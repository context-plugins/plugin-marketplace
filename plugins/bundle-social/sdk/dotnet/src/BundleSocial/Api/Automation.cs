using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using BundleSocial.Core;
using BundleSocial.Core.Exceptions;
using BundleSocial.Core.Models;
using BundleSocial.Core.Request;
using BundleSocial.Core.Response;
using BundleSocial.Errors;
using BundleSocial.Models;
using BundleSocial.Requests.Automation;

namespace BundleSocial.Api;

/// <summary>
/// Build, publish and monitor automation flows that react to incoming messages and comments, plus the per-account provider settings they rely on.
/// </summary>
public sealed class Automation
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Automation(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Activate an automation flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsActivateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationActivateFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resume a paused flow so that it triggers on new events again.
    /// </remarks>
    public Task<ApiV1AutomationsActivateResponse> AutomationActivateFlow(AutomationActivateFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations/{id}/activate"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AutomationsActivateResponse>(),
            AutomationActivateFlowError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Archive an automation flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsArchiveResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationArchiveFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retire a flow without deleting it. Archived flows never trigger and are hidden from the default list.
    /// </remarks>
    public Task<ApiV1AutomationsArchiveResponse> AutomationArchiveFlow(AutomationArchiveFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations/{id}/archive"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AutomationsArchiveResponse>(),
            AutomationArchiveFlowError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Copy automation flows between teams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsCopyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationCopyFlowsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Duplicate one or more automation flows into another team. The copies are created as drafts so they can be re-pointed at that team's social accounts before going live.
    /// </remarks>
    public Task<ApiV1AutomationsCopyResponse> AutomationCopyFlows(AutomationCopyFlowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations/copy"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1AutomationsCopyResponse>(),
            AutomationCopyFlowsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an automation flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationCreateFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an automation flow from a trigger and a list of steps. The flow starts as a draft and only runs once it is published.
    /// </remarks>
    public Task<ApiV1AutomationsResponse1> AutomationCreateFlow(AutomationCreateFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1AutomationsResponse1>(),
            AutomationCreateFlowError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an automation flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationDeleteFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an automation flow. Past executions are kept for auditing and stay readable.
    /// </remarks>
    public Task<ApiV1AutomationsResponse1> AutomationDeleteFlow(AutomationDeleteFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AutomationsResponse1>(),
            AutomationDeleteFlowError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an automation execution
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationExecutionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationGetExecutionError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single automation run by id, including its input event, its per-step results and any error that stopped it.
    /// </remarks>
    public Task<ApiV1AutomationExecutionsResponse> AutomationGetExecution(AutomationGetExecutionRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automation-executions/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AutomationExecutionsResponse>(),
            AutomationGetExecutionError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an automation flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationGetFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single automation flow by id, including its trigger, its steps and its current status.
    /// </remarks>
    public Task<ApiV1AutomationsResponse1> AutomationGetFlow(AutomationGetFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AutomationsResponse1>(),
            AutomationGetFlowError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get automation flow executions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsExecutionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationGetFlowExecutionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the runs of a single automation flow, newest first. Use it to see which events matched and how each run ended. Paginate with <c>offset</c> (<c>limit</c> max 500, default 10) or by passing the previous response's <c>nextCursor</c> back as <c>cursor</c>; the two cannot be combined. <c>total</c> is returned on the first page only.
    /// </remarks>
    public Task<ApiV1AutomationsExecutionsResponse> AutomationGetFlowExecutions(AutomationGetFlowExecutionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations/{id}/executions"),
            [new TemplateParam("id", request.Id)],
            [
                new Param("teamId", request.TeamId),
                new Param("flowVersionId", request.FlowVersionId),
                new Param("triggerId", request.TriggerId),
                new Param("socialAccountId", request.SocialAccountId),
                new Param("platform", request.Platform),
                new Param("status", request.Status),
                new Param("conversationId", request.ConversationId),
                new Param("fetchedCommentId", request.FetchedCommentId),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AutomationsExecutionsResponse>(),
            AutomationGetFlowExecutionsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get automation flows
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationGetFlowsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the automation flows of a team, newest first. Filter by <c>socialAccountId</c>, <c>status</c> and <c>platformScope</c>. Paginate with <c>offset</c> and <c>limit</c> (default 10). The response always carries the full <c>total</c>.
    /// </remarks>
    public Task<ApiV1AutomationsResponse> AutomationGetFlows(AutomationGetFlowsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("status", request.Status),
                new Param("platformScope", request.PlatformScope),
                new Param("socialAccountId", request.SocialAccountId),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AutomationsResponse>(),
            AutomationGetFlowsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get automation provider settings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationProviderSettingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationGetProviderSettingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List the platform-side automation settings stored per social account, such as the Instagram icebreakers or persistent menu we manage for you. Paginate with <c>offset</c> and <c>limit</c> (default 10). The response always carries the full <c>total</c>.
    /// </remarks>
    public Task<ApiV1AutomationProviderSettingsResponse> AutomationGetProviderSettings(AutomationGetProviderSettingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automation-provider-settings"),
            [],
            [
                new Param("teamId", request.TeamId),
                new Param("platform", request.Platform),
                new Param("socialAccountId", request.SocialAccountId),
                new Param("type", request.Type),
                new Param("status", request.Status),
                new Param("offset", request.Offset),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AutomationProviderSettingsResponse>(),
            AutomationGetProviderSettingsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Pause an automation flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsPauseResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationPauseFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stop a live flow from triggering on new events while keeping its configuration intact.
    /// </remarks>
    public Task<ApiV1AutomationsPauseResponse> AutomationPauseFlow(AutomationPauseFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations/{id}/pause"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AutomationsPauseResponse>(),
            AutomationPauseFlowError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Publish an automation flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsPublishResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationPublishFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Validate a draft flow and make it live, so that matching events start triggering it. Returns 400 when the flow is not valid.
    /// </remarks>
    public Task<ApiV1AutomationsPublishResponse> AutomationPublishFlow(AutomationPublishFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations/{id}/publish"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1AutomationsPublishResponse>(),
            AutomationPublishFlowError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send a rich automation message to a conversation
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationRichMessagesConversationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationSendRichMessageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a rich message, such as a button or card template, into a conversation using the same renderer the automation steps use. Returns 503 while messaging sending is temporarily disabled.
    /// </remarks>
    public Task<ApiV1AutomationRichMessagesConversationsResponse> AutomationSendRichMessage(AutomationSendRichMessageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automation-rich-messages/conversations/{conversationId}"),
            [new TemplateParam("conversationId", request.ConversationId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1AutomationRichMessagesConversationsResponse>(),
            AutomationSendRichMessageError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sync automation provider settings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationProviderSettingsSyncResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationSyncProviderSettingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Re-push a stored automation setting to the platform, for example after a failed sync or a reconnected account.
    /// </remarks>
    public Task<ApiV1AutomationProviderSettingsSyncResponse> AutomationSyncProviderSetting(AutomationSyncProviderSettingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automation-provider-settings/{id}/sync"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AutomationProviderSettingsSyncResponse>(),
            AutomationSyncProviderSettingError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run an automation flow test
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsTestResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationTestFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Run a flow once against a sample event and return the resulting execution. Steps that send a message really send it, so a test returns 503 while messaging sending is temporarily disabled.
    /// </remarks>
    public Task<ApiV1AutomationsTestResponse> AutomationTestFlow(AutomationTestFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations/{id}/test"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1AutomationsTestResponse>(),
            AutomationTestFlowError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an automation flow
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationUpdateFlowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the name, trigger or steps of an automation flow. Changes to a published flow take effect on the next matching event.
    /// </remarks>
    public Task<ApiV1AutomationsResponse1> AutomationUpdateFlow(AutomationUpdateFlowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1AutomationsResponse1>(),
            AutomationUpdateFlowError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create or update automation provider settings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AutomationProviderSettingsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AutomationUpsertProviderSettingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create or replace the automation setting of a given type for a social account, and push it to the platform.
    /// </remarks>
    public Task<ApiV1AutomationProviderSettingsResponse1> AutomationUpsertProviderSetting(AutomationUpsertProviderSettingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/automation-provider-settings/{socialAccountId}/{type}"),
            [new TemplateParam("socialAccountId", request.SocialAccountId), new TemplateParam("type", request.Type)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV1AutomationProviderSettingsResponse1>(),
            AutomationUpsertProviderSettingError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
