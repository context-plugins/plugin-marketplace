using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Clix.Core;
using Clix.Core.Authentication;
using Clix.Core.Configuration;
using Clix.Core.ErrorResponse;
using Clix.Core.Exceptions;
using Clix.Core.Logging;
using Clix.Core.Models;
using Clix.Core.Request;
using Clix.Core.Response;
using Clix.Errors;
using Clix.Models;
using Clix.Requests;

namespace Clix;

public sealed class ClixClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public ClixClient(HttpClient httpClient, ClixClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "ClixClient/version not set CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "version not set"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("CLIX_LOG"),
            "ClixClient",
            options.TimeProvider);
        var responseContexts = new ResponseContextFactory(options.TimeProvider, options.StreamReadTimeout);
        _rawClient =
            new RawClient(
                httpClient,
                urlFactory,
                httpStatusPolicy,
                headersFactory,
                resiliencePipelineFactory,
                httpLogger,
                options.Hooks,
                responseContexts);
        _auth = new AuthSchemes(options);
    }

    /// <summary>
    /// Event
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CreateEventsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<V1CreateEventsResponse> ClixExternalServiceCreateEvents(ClixExternalServiceCreateEventsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/events"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1CreateEventsResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.All(_auth.ProjectIdAuth, _auth.ApiKeyAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Device
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CreateOrUpdateDevicesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<V1CreateOrUpdateDevicesResponse> ClixExternalServiceCreateOrUpdateDevices(ClixExternalServiceCreateOrUpdateDevicesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/devices"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1CreateOrUpdateDevicesResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.All(_auth.ProjectIdAuth, _auth.ApiKeyAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// UserProperty
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CreateOrUpdateUsersPropertiesByDeviceIdResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<V1CreateOrUpdateUsersPropertiesByDeviceIdResponse> ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceId(ClixExternalServiceCreateOrUpdateUsersPropertiesByDeviceIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/devices/{deviceId}/user/properties"),
            [new TemplateParam("deviceId", request.DeviceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1CreateOrUpdateUsersPropertiesByDeviceIdResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.All(_auth.ProjectIdAuth, _auth.ApiKeyAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a new user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1CreateUserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClixExternalServiceCreateUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new user with the specified project_user_id
    /// </remarks>
    public Task<V1CreateUserResponse> ClixExternalServiceCreateUser(ClixExternalServiceCreateUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/users"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1CreateUserResponse>(),
            ClixExternalServiceCreateUserError.Response,
            AuthScheme.All(_auth.ProjectIdAuth, _auth.ApiKeyAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClixExternalServiceDeleteUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a user and all associated data
    /// </remarks>
    public Task<object> ClixExternalServiceDeleteUser(ClixExternalServiceDeleteUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/users/{project_user_id}"),
            [new TemplateParam("project_user_id", request.ProjectUserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            ClixExternalServiceDeleteUserError.Response,
            AuthScheme.All(_auth.ProjectIdAuth, _auth.ApiKeyAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Clix external service health check
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Clixexternalv1HealthCheckResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<Clixexternalv1HealthCheckResponse> ClixExternalServiceHealthCheck(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/health"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Clixexternalv1HealthCheckResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.All(_auth.ProjectIdAuth, _auth.ApiKeyAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send push notifications to user devices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SendPushNotificationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClixExternalServiceSendPushNotificationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint sends push notifications to one or more user devices.
    /// </remarks>
    public Task<V1SendPushNotificationsResponse> ClixExternalServiceSendPushNotifications(ClixExternalServiceSendPushNotificationsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/messages:send"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SendPushNotificationsResponse>(),
            ClixExternalServiceSendPushNotificationsError.Response,
            AuthScheme.All(_auth.ProjectIdAuth, _auth.ApiKeyAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Clix external service set project user id for device
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1SetProjectUserIdForDeviceResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<V1SetProjectUserIdForDeviceResponse> ClixExternalServiceSetProjectUserIdForDevice(ClixExternalServiceSetProjectUserIdForDeviceRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/devices/{deviceId}/user/project-user-id"),
            [new TemplateParam("deviceId", request.DeviceId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1SetProjectUserIdForDeviceResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.All(_auth.ProjectIdAuth, _auth.ApiKeyAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Live Activities on user devices
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1StartLiveActivitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClixExternalServiceStartLiveActivitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint starts iOS Live Activities on one or more user devices using Push to Start.
    /// </remarks>
    public Task<V1StartLiveActivitiesResponse> ClixExternalServiceStartLiveActivities(ClixExternalServiceStartLiveActivitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/live-activities:start"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1StartLiveActivitiesResponse>(),
            ClixExternalServiceStartLiveActivitiesError.Response,
            AuthScheme.All(_auth.ProjectIdAuth, _auth.ApiKeyAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Trigger a campaign
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1TriggerCampaignResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClixExternalServiceTriggerCampaignError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Triggers an API-triggered campaign to send messages to a specific audience
    /// </remarks>
    public Task<V1TriggerCampaignResponse> ClixExternalServiceTriggerCampaign(ClixExternalServiceTriggerCampaignRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/campaigns/{campaign_id}:trigger"),
            [new TemplateParam("campaign_id", request.CampaignId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1TriggerCampaignResponse>(),
            ClixExternalServiceTriggerCampaignError.Response,
            AuthScheme.All(_auth.ProjectIdAuth, _auth.ApiKeyAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update an existing user
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1UpdateUserResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ClixExternalServiceUpdateUserError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates user properties
    /// </remarks>
    public Task<V1UpdateUserResponse> ClixExternalServiceUpdateUser(ClixExternalServiceUpdateUserRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/users/{project_user_id}"),
            [new TemplateParam("project_user_id", request.ProjectUserId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1UpdateUserResponse>(),
            ClixExternalServiceUpdateUserError.Response,
            AuthScheme.All(_auth.ProjectIdAuth, _auth.ApiKeyAuth),
            requestOptions,
            cancellationToken);
}
