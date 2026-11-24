using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Soda.Core;
using Soda.Core.Authentication;
using Soda.Core.Exceptions;
using Soda.Core.Models;
using Soda.Core.Request;
using Soda.Core.Response;
using Soda.Errors;
using Soda.Models;
using Soda.Requests.NotificationRules;

namespace Soda.Api;

/// <summary>
/// Soda Cloud API Notification Rule Endpoints
/// </summary>
public sealed class NotificationRules
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal NotificationRules(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a notification rule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiDeleteNotificationRuleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteApiV1NotificationRulesNotificationRuleIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Schedules a notification rule for deletion. Deletion is processed asynchronously.
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Notification Rules</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiDeleteNotificationRuleResponse> DeleteApiV1NotificationRulesNotificationRuleId(DeleteApiV1NotificationRulesNotificationRuleIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/notificationRules/{notificationRuleId}"),
            [new TemplateParam("notificationRuleId", request.NotificationRuleId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiDeleteNotificationRuleResponse>(),
            DeleteApiV1NotificationRulesNotificationRuleIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List notification rules
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiListNotificationRulesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1NotificationRulesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint allows you to list the notification rules in your organization.
    /// <para>
    /// This GET is a paginated API that uses the following parameters to request specific details:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>size</c>: Supply an integer value between 10 and 1000, inclusive. The default value is 10.</description></item>
    /// </list>
    /// <list type="bullet">
    ///   <item><description><c>page</c>: Supply an integer value. The default value is 0.</description></item>
    /// </list>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Notification Rules</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 60 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiListNotificationRulesResponse> GetApiV1NotificationRules(GetApiV1NotificationRulesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/notificationRules"),
            [],
            [new Param("page", request.Page), new Param("size", request.Size)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PublicApiListNotificationRulesResponse>(),
            GetApiV1NotificationRulesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a notification rule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiNotificationRuleDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1NotificationRulesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a notification rule with the provided filter and recipients.
    /// <para>
    /// The filter is a simplified expression tree (and/or/not/equals/contains/in) over check and monitor attributes; recipients can be users, user groups, emails, integrations, or roles.
    /// </para>
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Notification Rules</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiNotificationRuleDto> PostApiV1NotificationRules(PostApiV1NotificationRulesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/notificationRules"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiNotificationRuleDto>(),
            PostApiV1NotificationRulesError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a notification rule
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PublicApiNotificationRuleDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApiV1NotificationRulesNotificationRuleIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a notification rule. This is a full replacement: the rule's name, type, filter, recipients, status, and customization are all set from the request body.
    /// <para>
    /// ## Authentication
    /// </para>
    /// <para>
    /// User authentication required: <c>true</c>
    /// </para>
    /// <para>
    /// This endpoint accepts authentication via API keys in the <c>Basic</c> authentication header, or a pre-authenticated token in HTTP cookie <c>token</c>. Cookie sessions extend automatically on each request.
    /// </para>
    /// <para>
    /// ## Authorization
    /// </para>
    /// <para>
    /// Users must have global role permission MANAGE_NOTIFICATION_RULES to execute this call.
    /// </para>
    /// <para>
    /// ## Tags
    /// </para>
    /// <para>
    /// <c>Notification Rules</c>
    /// </para>
    /// <para>
    /// ## Rate limiting
    /// </para>
    /// <para>
    /// 10 requests/60 seconds
    /// </para>
    /// </remarks>
    public Task<PublicApiNotificationRuleDto> PostApiV1NotificationRulesNotificationRuleId(PostApiV1NotificationRulesNotificationRuleIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/notificationRules/{notificationRuleId}"),
            [new TemplateParam("notificationRuleId", request.NotificationRuleId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PublicApiNotificationRuleDto>(),
            PostApiV1NotificationRulesNotificationRuleIdError.Response,
            AuthScheme.Any(_auth.BasicAuthApiKey, _auth.CookieToken),
            requestOptions,
            cancellationToken);
}
