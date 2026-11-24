using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Alerts;

namespace DoiT.Api;

/// <summary>
/// Notifications triggered when cloud costs exceed defined thresholds or meet specific conditions.
/// </summary>
public sealed class Alerts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Alerts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create an alert
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Alert"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateAlertError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new alert.
    /// </remarks>
    public Task<Alert> CreateAlert(CreateAlertRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/alerts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Alert>(),
            CreateAlertError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an alert
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteAlertError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the alert specified by the Id.
    /// </remarks>
    public Task DeleteAlert(DeleteAlertRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/alerts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteAlertError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve an alert
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Alert"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetAlertError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns an alert by the specified Id.
    /// </remarks>
    public Task<Alert> GetAlert(GetAlertRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/alerts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Alert>(),
            GetAlertError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List eligible Slack destinations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AlertSlackChannelList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAlertSlackChannelsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists Slack destinations eligible for Alert notifications for the authenticated customer and caller. Returns canonical identifiers for recipientsSlackChannels and integration status. User credentials include visible private channels; service accounts return public/shared channels only. Results are sorted by stable destination identity. Keep nameContains unchanged when following pageToken.
    /// </remarks>
    public Task<AlertSlackChannelList> ListAlertSlackChannels(ListAlertSlackChannelsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/alerts/slack-channels"),
            [],
            [
                new Param("nameContains", request.NameContains),
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AlertSlackChannelList>(),
            ListAlertSlackChannelsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List alerts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ExternalAlertList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListAlertsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of alerts that your account has access to.
    /// Alerts are listed in reverse chronological order by default.
    /// </remarks>
    public Task<ExternalAlertList> ListAlerts(ListAlertsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/alerts"),
            [],
            [
                new Param("sortBy", request.SortBy),
                new Param("sortOrder", request.SortOrder),
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("filter", request.Filter),
                new Param("nameContains", request.NameContains),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ExternalAlertList>(),
            ListAlertsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an alert
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Alert"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateAlertError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the alert specified by the Id.
    /// </remarks>
    public Task<Alert> UpdateAlert(UpdateAlertRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/analytics/v1/alerts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Alert>(),
            UpdateAlertError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
