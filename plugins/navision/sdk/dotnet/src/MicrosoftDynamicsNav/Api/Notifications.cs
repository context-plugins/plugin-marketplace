using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MicrosoftDynamicsNav.Core;
using MicrosoftDynamicsNav.Core.Authentication;
using MicrosoftDynamicsNav.Core.Exceptions;
using MicrosoftDynamicsNav.Core.Models;
using MicrosoftDynamicsNav.Core.Request;
using MicrosoftDynamicsNav.Core.Response;
using MicrosoftDynamicsNav.Errors;
using MicrosoftDynamicsNav.Models;
using MicrosoftDynamicsNav.Requests.Notifications;

namespace MicrosoftDynamicsNav.Api;

/// <summary>
/// Manage administrative notifications
/// </summary>
public sealed class Notifications
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Notifications(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add a Notification Recipient
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NotificationRecipient"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddNotificationRecipientError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds a new notification recipient for the environment.
    /// </remarks>
    public Task<NotificationRecipient> AddNotificationRecipient(AddNotificationRecipientRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/notifications"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NotificationRecipient>(),
            AddNotificationRecipientError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Notification Recipients
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationsEnvironmentsNotificationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListNotificationRecipientsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of notification recipients for the environment.
    /// </remarks>
    public Task<ApplicationsEnvironmentsNotificationsResponse> ListNotificationRecipients(ListNotificationRecipientsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultBusinessCentralAdministrationCenterAppManagementApi(
                "/applications/{applicationFamily}/environments/{environmentName}/notifications"),
            [
                new TemplateParam("applicationFamily", request.ApplicationFamily),
                new TemplateParam("environmentName", request.EnvironmentName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationsEnvironmentsNotificationsResponse>(),
            ListNotificationRecipientsError.Response,
            AuthScheme.Any(_auth.Oauth2AuthorizationCode, _auth.Oauth2ClientCredentials, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
