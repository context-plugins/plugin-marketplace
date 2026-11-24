using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudEventarc.Core;
using GoogleCloudEventarc.Core.Authentication;
using GoogleCloudEventarc.Core.Configuration;
using GoogleCloudEventarc.Core.Exceptions;
using GoogleCloudEventarc.Core.Logging;
using GoogleCloudEventarc.Core.Models;
using GoogleCloudEventarc.Core.Request;
using GoogleCloudEventarc.Core.Response;
using GoogleCloudEventarc.Errors;
using GoogleCloudEventarc.Models;
using GoogleCloudEventarc.Requests;

namespace GoogleCloudEventarc;

/// <summary>
/// Generated from Google's published Discovery document for Eventarc API (eventarc v1, revision 20261030). 66 operation(s).
/// </summary>
public sealed class GoogleCloudEventarcClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleCloudEventarcClient(HttpClient httpClient, GoogleCloudEventarcClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleCloudEventarcClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_CLOUD_EVENTARC_LOG"),
            "GoogleCloudEventarcClient",
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
        _auth = new AuthSchemes(options, _server, _rawClient, urlFactory);
    }

    /// <summary>
    /// Create channelConnections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelConnectionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new ChannelConnection in a particular project and location.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsChannelConnectionsCreate(EventarcProjectsLocationsChannelConnectionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/channelConnections"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("channelConnectionId", request.ChannelConnectionId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsChannelConnectionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete channelConnections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelConnectionsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a single ChannelConnection.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsChannelConnectionsDelete(EventarcProjectsLocationsChannelConnectionsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("channelConnectionsId", request.ChannelConnectionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsChannelConnectionsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get channelConnections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ChannelConnection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelConnectionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single ChannelConnection.
    /// </remarks>
    public Task<ChannelConnection> EventarcProjectsLocationsChannelConnectionsGet(EventarcProjectsLocationsChannelConnectionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("channelConnectionsId", request.ChannelConnectionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ChannelConnection>(),
            EventarcProjectsLocationsChannelConnectionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy channelConnections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelConnectionsGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsChannelConnectionsGetIamPolicy(EventarcProjectsLocationsChannelConnectionsGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("channelConnectionsId", request.ChannelConnectionsId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsChannelConnectionsGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List channelConnections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListChannelConnectionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelConnectionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List channel connections.
    /// </remarks>
    public Task<ListChannelConnectionsResponse> EventarcProjectsLocationsChannelConnectionsList(EventarcProjectsLocationsChannelConnectionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/channelConnections"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListChannelConnectionsResponse>(),
            EventarcProjectsLocationsChannelConnectionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy channelConnections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelConnectionsSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy. Can return <c>NOT_FOUND</c>, <c>INVALID_ARGUMENT</c>, and <c>PERMISSION_DENIED</c> errors.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsChannelConnectionsSetIamPolicy(EventarcProjectsLocationsChannelConnectionsSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("channelConnectionsId", request.ChannelConnectionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsChannelConnectionsSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions channelConnections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a <c>NOT_FOUND</c> error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> EventarcProjectsLocationsChannelConnectionsTestIamPermissions(EventarcProjectsLocationsChannelConnectionsTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channelConnections/{channelConnectionsId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("channelConnectionsId", request.ChannelConnectionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            EventarcProjectsLocationsChannelConnectionsTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create channels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new channel in a particular project and location.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsChannelsCreate(EventarcProjectsLocationsChannelsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/channels"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("channelId", request.ChannelId), new Param("validateOnly", request.ValidateOnly)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsChannelsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete channels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a single channel.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsChannelsDelete(EventarcProjectsLocationsChannelsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("channelsId", request.ChannelsId),
            ],
            [new Param("validateOnly", request.ValidateOnly)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsChannelsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get channels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Channel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single Channel.
    /// </remarks>
    public Task<Channel> EventarcProjectsLocationsChannelsGet(EventarcProjectsLocationsChannelsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("channelsId", request.ChannelsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Channel>(),
            EventarcProjectsLocationsChannelsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy channels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelsGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsChannelsGetIamPolicy(EventarcProjectsLocationsChannelsGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("channelsId", request.ChannelsId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsChannelsGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List channels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListChannelsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List channels.
    /// </remarks>
    public Task<ListChannelsResponse> EventarcProjectsLocationsChannelsList(EventarcProjectsLocationsChannelsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/channels"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("orderBy", request.OrderBy),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListChannelsResponse>(),
            EventarcProjectsLocationsChannelsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch channels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a single channel.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsChannelsPatch(EventarcProjectsLocationsChannelsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("channelsId", request.ChannelsId),
            ],
            [new Param("updateMask", request.UpdateMask), new Param("validateOnly", request.ValidateOnly)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsChannelsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy channels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelsSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy. Can return <c>NOT_FOUND</c>, <c>INVALID_ARGUMENT</c>, and <c>PERMISSION_DENIED</c> errors.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsChannelsSetIamPolicy(EventarcProjectsLocationsChannelsSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("channelsId", request.ChannelsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsChannelsSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions channels
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsChannelsTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a <c>NOT_FOUND</c> error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> EventarcProjectsLocationsChannelsTestIamPermissions(EventarcProjectsLocationsChannelsTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/channels/{channelsId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("channelsId", request.ChannelsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            EventarcProjectsLocationsChannelsTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create enrollments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsEnrollmentsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new Enrollment in a particular project and location.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsEnrollmentsCreate(EventarcProjectsLocationsEnrollmentsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/enrollments"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("enrollmentId", request.EnrollmentId), new Param("validateOnly", request.ValidateOnly)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsEnrollmentsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete enrollments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsEnrollmentsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a single Enrollment.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsEnrollmentsDelete(EventarcProjectsLocationsEnrollmentsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("enrollmentsId", request.EnrollmentsId),
            ],
            [
                new Param("allowMissing", request.AllowMissing),
                new Param("etag", request.Etag),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsEnrollmentsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get enrollments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Enrollment"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsEnrollmentsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single Enrollment.
    /// </remarks>
    public Task<Enrollment> EventarcProjectsLocationsEnrollmentsGet(EventarcProjectsLocationsEnrollmentsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("enrollmentsId", request.EnrollmentsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Enrollment>(),
            EventarcProjectsLocationsEnrollmentsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy enrollments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsEnrollmentsGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsEnrollmentsGetIamPolicy(EventarcProjectsLocationsEnrollmentsGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("enrollmentsId", request.EnrollmentsId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsEnrollmentsGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List enrollments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListEnrollmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsEnrollmentsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List Enrollments.
    /// </remarks>
    public Task<ListEnrollmentsResponse> EventarcProjectsLocationsEnrollmentsList(EventarcProjectsLocationsEnrollmentsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/enrollments"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("orderBy", request.OrderBy),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListEnrollmentsResponse>(),
            EventarcProjectsLocationsEnrollmentsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch enrollments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsEnrollmentsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a single Enrollment.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsEnrollmentsPatch(EventarcProjectsLocationsEnrollmentsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("enrollmentsId", request.EnrollmentsId),
            ],
            [
                new Param("allowMissing", request.AllowMissing),
                new Param("updateMask", request.UpdateMask),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsEnrollmentsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy enrollments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsEnrollmentsSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy. Can return <c>NOT_FOUND</c>, <c>INVALID_ARGUMENT</c>, and <c>PERMISSION_DENIED</c> errors.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsEnrollmentsSetIamPolicy(EventarcProjectsLocationsEnrollmentsSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("enrollmentsId", request.EnrollmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsEnrollmentsSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions enrollments
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsEnrollmentsTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a <c>NOT_FOUND</c> error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> EventarcProjectsLocationsEnrollmentsTestIamPermissions(EventarcProjectsLocationsEnrollmentsTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/enrollments/{enrollmentsId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("enrollmentsId", request.EnrollmentsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            EventarcProjectsLocationsEnrollmentsTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Location"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about a location.
    /// </remarks>
    public Task<Location> EventarcProjectsLocationsGet(EventarcProjectsLocationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Location>(),
            EventarcProjectsLocationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get google channel config locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleChannelConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsGetGoogleChannelConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a GoogleChannelConfig. The name of the GoogleChannelConfig in the response is ALWAYS coded with projectID.
    /// </remarks>
    public Task<GoogleChannelConfig> EventarcProjectsLocationsGetGoogleChannelConfig(EventarcProjectsLocationsGetGoogleChannelConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/googleChannelConfig"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleChannelConfig>(),
            EventarcProjectsLocationsGetGoogleChannelConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create googleApiSources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsGoogleApiSourcesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new GoogleApiSource in a particular project and location.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsGoogleApiSourcesCreate(EventarcProjectsLocationsGoogleApiSourcesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("googleApiSourceId", request.GoogleApiSourceId),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsGoogleApiSourcesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete googleApiSources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsGoogleApiSourcesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a single GoogleApiSource.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsGoogleApiSourcesDelete(EventarcProjectsLocationsGoogleApiSourcesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("googleApiSourcesId", request.GoogleApiSourcesId),
            ],
            [
                new Param("allowMissing", request.AllowMissing),
                new Param("etag", request.Etag),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsGoogleApiSourcesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get googleApiSources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleApiSource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsGoogleApiSourcesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single GoogleApiSource.
    /// </remarks>
    public Task<GoogleApiSource> EventarcProjectsLocationsGoogleApiSourcesGet(EventarcProjectsLocationsGoogleApiSourcesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("googleApiSourcesId", request.GoogleApiSourcesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleApiSource>(),
            EventarcProjectsLocationsGoogleApiSourcesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy googleApiSources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsGoogleApiSourcesGetIamPolicy(EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("googleApiSourcesId", request.GoogleApiSourcesId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsGoogleApiSourcesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List googleApiSources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListGoogleApiSourcesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsGoogleApiSourcesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List GoogleApiSources.
    /// </remarks>
    public Task<ListGoogleApiSourcesResponse> EventarcProjectsLocationsGoogleApiSourcesList(EventarcProjectsLocationsGoogleApiSourcesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("orderBy", request.OrderBy),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListGoogleApiSourcesResponse>(),
            EventarcProjectsLocationsGoogleApiSourcesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch googleApiSources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsGoogleApiSourcesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a single GoogleApiSource.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsGoogleApiSourcesPatch(EventarcProjectsLocationsGoogleApiSourcesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("googleApiSourcesId", request.GoogleApiSourcesId),
            ],
            [
                new Param("allowMissing", request.AllowMissing),
                new Param("updateMask", request.UpdateMask),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsGoogleApiSourcesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy googleApiSources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy. Can return <c>NOT_FOUND</c>, <c>INVALID_ARGUMENT</c>, and <c>PERMISSION_DENIED</c> errors.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsGoogleApiSourcesSetIamPolicy(EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("googleApiSourcesId", request.GoogleApiSourcesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsGoogleApiSourcesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions googleApiSources
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a <c>NOT_FOUND</c> error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> EventarcProjectsLocationsGoogleApiSourcesTestIamPermissions(EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/googleApiSources/{googleApiSourcesId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("googleApiSourcesId", request.GoogleApiSourcesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            EventarcProjectsLocationsGoogleApiSourcesTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListLocationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * <b>Global locations</b>: If <c>name</c> is empty, the method lists the public locations available to all projects. * <b>Project-specific locations</b>: If <c>name</c> follows the format <c>projects/{project}</c>, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the <c>name</c> field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
    /// </remarks>
    public Task<ListLocationsResponse> EventarcProjectsLocationsList(EventarcProjectsLocationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations"),
            [new TemplateParam("projectsId", request.ProjectsId)],
            [
                new Param("extraLocationTypes", request.ExtraLocationTypes),
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListLocationsResponse>(),
            EventarcProjectsLocationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create messageBuses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsMessageBusesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new MessageBus in a particular project and location.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsMessageBusesCreate(EventarcProjectsLocationsMessageBusesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/messageBuses"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("messageBusId", request.MessageBusId), new Param("validateOnly", request.ValidateOnly)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsMessageBusesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete messageBuses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsMessageBusesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a single message bus.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsMessageBusesDelete(EventarcProjectsLocationsMessageBusesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("messageBusesId", request.MessageBusesId),
            ],
            [
                new Param("allowMissing", request.AllowMissing),
                new Param("etag", request.Etag),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsMessageBusesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get messageBuses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageBus"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsMessageBusesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single MessageBus.
    /// </remarks>
    public Task<MessageBus> EventarcProjectsLocationsMessageBusesGet(EventarcProjectsLocationsMessageBusesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("messageBusesId", request.MessageBusesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MessageBus>(),
            EventarcProjectsLocationsMessageBusesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy messageBuses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsMessageBusesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsMessageBusesGetIamPolicy(EventarcProjectsLocationsMessageBusesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("messageBusesId", request.MessageBusesId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsMessageBusesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List messageBuses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListMessageBusesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsMessageBusesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List message buses.
    /// </remarks>
    public Task<ListMessageBusesResponse> EventarcProjectsLocationsMessageBusesList(EventarcProjectsLocationsMessageBusesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/messageBuses"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("orderBy", request.OrderBy),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListMessageBusesResponse>(),
            EventarcProjectsLocationsMessageBusesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List enrollments messageBuses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListMessageBusEnrollmentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsMessageBusesListEnrollmentsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List message bus enrollments.
    /// </remarks>
    public Task<ListMessageBusEnrollmentsResponse> EventarcProjectsLocationsMessageBusesListEnrollments(EventarcProjectsLocationsMessageBusesListEnrollmentsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:listEnrollments"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("messageBusesId", request.MessageBusesId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListMessageBusEnrollmentsResponse>(),
            EventarcProjectsLocationsMessageBusesListEnrollmentsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch messageBuses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsMessageBusesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a single message bus.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsMessageBusesPatch(EventarcProjectsLocationsMessageBusesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("messageBusesId", request.MessageBusesId),
            ],
            [
                new Param("allowMissing", request.AllowMissing),
                new Param("updateMask", request.UpdateMask),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsMessageBusesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy messageBuses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsMessageBusesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy. Can return <c>NOT_FOUND</c>, <c>INVALID_ARGUMENT</c>, and <c>PERMISSION_DENIED</c> errors.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsMessageBusesSetIamPolicy(EventarcProjectsLocationsMessageBusesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("messageBusesId", request.MessageBusesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsMessageBusesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions messageBuses
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsMessageBusesTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a <c>NOT_FOUND</c> error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> EventarcProjectsLocationsMessageBusesTestIamPermissions(EventarcProjectsLocationsMessageBusesTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/messageBuses/{messageBusesId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("messageBusesId", request.MessageBusesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            EventarcProjectsLocationsMessageBusesTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsOperationsCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of <c>1</c>, corresponding to <c>Code.CANCELLED</c>.
    /// </remarks>
    public Task<object> EventarcProjectsLocationsOperationsCancel(EventarcProjectsLocationsOperationsCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            EventarcProjectsLocationsOperationsCancelError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsOperationsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<object> EventarcProjectsLocationsOperationsDelete(EventarcProjectsLocationsOperationsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            EventarcProjectsLocationsOperationsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsOperationsGet(EventarcProjectsLocationsOperationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningListOperationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns <c>UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<GoogleLongrunningListOperationsResponse> EventarcProjectsLocationsOperationsList(EventarcProjectsLocationsOperationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/operations"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("returnPartialSuccess", request.ReturnPartialSuccess),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningListOperationsResponse>(),
            EventarcProjectsLocationsOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsPipelinesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new Pipeline in a particular project and location.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsPipelinesCreate(EventarcProjectsLocationsPipelinesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/pipelines"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("pipelineId", request.PipelineId), new Param("validateOnly", request.ValidateOnly)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsPipelinesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsPipelinesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a single pipeline.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsPipelinesDelete(EventarcProjectsLocationsPipelinesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pipelinesId", request.PipelinesId),
            ],
            [
                new Param("allowMissing", request.AllowMissing),
                new Param("etag", request.Etag),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsPipelinesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Pipeline"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsPipelinesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single Pipeline.
    /// </remarks>
    public Task<Pipeline> EventarcProjectsLocationsPipelinesGet(EventarcProjectsLocationsPipelinesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pipelinesId", request.PipelinesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Pipeline>(),
            EventarcProjectsLocationsPipelinesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsPipelinesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsPipelinesGetIamPolicy(EventarcProjectsLocationsPipelinesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pipelinesId", request.PipelinesId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsPipelinesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListPipelinesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsPipelinesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List pipelines.
    /// </remarks>
    public Task<ListPipelinesResponse> EventarcProjectsLocationsPipelinesList(EventarcProjectsLocationsPipelinesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/pipelines"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("orderBy", request.OrderBy),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListPipelinesResponse>(),
            EventarcProjectsLocationsPipelinesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsPipelinesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a single pipeline.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsPipelinesPatch(EventarcProjectsLocationsPipelinesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pipelinesId", request.PipelinesId),
            ],
            [
                new Param("allowMissing", request.AllowMissing),
                new Param("updateMask", request.UpdateMask),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsPipelinesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsPipelinesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy. Can return <c>NOT_FOUND</c>, <c>INVALID_ARGUMENT</c>, and <c>PERMISSION_DENIED</c> errors.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsPipelinesSetIamPolicy(EventarcProjectsLocationsPipelinesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pipelinesId", request.PipelinesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsPipelinesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions pipelines
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsPipelinesTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a <c>NOT_FOUND</c> error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> EventarcProjectsLocationsPipelinesTestIamPermissions(EventarcProjectsLocationsPipelinesTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/pipelines/{pipelinesId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("pipelinesId", request.PipelinesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            EventarcProjectsLocationsPipelinesTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get providers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Provider"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsProvidersGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single Provider.
    /// </remarks>
    public Task<Provider> EventarcProjectsLocationsProvidersGet(EventarcProjectsLocationsProvidersGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/providers/{providersId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("providersId", request.ProvidersId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Provider>(),
            EventarcProjectsLocationsProvidersGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List providers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListProvidersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsProvidersListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List providers.
    /// </remarks>
    public Task<ListProvidersResponse> EventarcProjectsLocationsProvidersList(EventarcProjectsLocationsProvidersListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/providers"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("orderBy", request.OrderBy),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListProvidersResponse>(),
            EventarcProjectsLocationsProvidersListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create triggers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsTriggersCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new trigger in a particular project and location.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsTriggersCreate(EventarcProjectsLocationsTriggersCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/triggers"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("triggerId", request.TriggerId), new Param("validateOnly", request.ValidateOnly)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsTriggersCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete triggers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsTriggersDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a single trigger.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsTriggersDelete(EventarcProjectsLocationsTriggersDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("triggersId", request.TriggersId),
            ],
            [
                new Param("allowMissing", request.AllowMissing),
                new Param("etag", request.Etag),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsTriggersDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get triggers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Trigger"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsTriggersGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a single trigger.
    /// </remarks>
    public Task<Trigger> EventarcProjectsLocationsTriggersGet(EventarcProjectsLocationsTriggersGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("triggersId", request.TriggersId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Trigger>(),
            EventarcProjectsLocationsTriggersGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy triggers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsTriggersGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsTriggersGetIamPolicy(EventarcProjectsLocationsTriggersGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("triggersId", request.TriggersId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsTriggersGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List triggers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTriggersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsTriggersListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List triggers.
    /// </remarks>
    public Task<ListTriggersResponse> EventarcProjectsLocationsTriggersList(EventarcProjectsLocationsTriggersListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/triggers"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("orderBy", request.OrderBy),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListTriggersResponse>(),
            EventarcProjectsLocationsTriggersListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch triggers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleLongrunningOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsTriggersPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a single trigger.
    /// </remarks>
    public Task<GoogleLongrunningOperation> EventarcProjectsLocationsTriggersPatch(EventarcProjectsLocationsTriggersPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("triggersId", request.TriggersId),
            ],
            [
                new Param("allowMissing", request.AllowMissing),
                new Param("updateMask", request.UpdateMask),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleLongrunningOperation>(),
            EventarcProjectsLocationsTriggersPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy triggers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsTriggersSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy. Can return <c>NOT_FOUND</c>, <c>INVALID_ARGUMENT</c>, and <c>PERMISSION_DENIED</c> errors.
    /// </remarks>
    public Task<Policy> EventarcProjectsLocationsTriggersSetIamPolicy(EventarcProjectsLocationsTriggersSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("triggersId", request.TriggersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            EventarcProjectsLocationsTriggersSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions triggers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsTriggersTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a <c>NOT_FOUND</c> error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> EventarcProjectsLocationsTriggersTestIamPermissions(EventarcProjectsLocationsTriggersTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/triggers/{triggersId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("triggersId", request.TriggersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            EventarcProjectsLocationsTriggersTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update google channel config locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GoogleChannelConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EventarcProjectsLocationsUpdateGoogleChannelConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a single GoogleChannelConfig
    /// </remarks>
    public Task<GoogleChannelConfig> EventarcProjectsLocationsUpdateGoogleChannelConfig(EventarcProjectsLocationsUpdateGoogleChannelConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/googleChannelConfig"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<GoogleChannelConfig>(),
            EventarcProjectsLocationsUpdateGoogleChannelConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
