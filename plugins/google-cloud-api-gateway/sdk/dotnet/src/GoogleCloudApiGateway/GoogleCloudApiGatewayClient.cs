using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudApiGateway.Core;
using GoogleCloudApiGateway.Core.Authentication;
using GoogleCloudApiGateway.Core.Configuration;
using GoogleCloudApiGateway.Core.Exceptions;
using GoogleCloudApiGateway.Core.Logging;
using GoogleCloudApiGateway.Core.Models;
using GoogleCloudApiGateway.Core.Request;
using GoogleCloudApiGateway.Core.Response;
using GoogleCloudApiGateway.Errors;
using GoogleCloudApiGateway.Models;
using GoogleCloudApiGateway.Requests;

namespace GoogleCloudApiGateway;

/// <summary>
/// Generated from Google's published Discovery document for API Gateway API (apigateway v1, revision 20261102). 30 operation(s).
/// </summary>
public sealed class GoogleCloudApiGatewayClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleCloudApiGatewayClient(HttpClient httpClient, GoogleCloudApiGatewayClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleCloudApiGatewayClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_CLOUD_API_GATEWAY_LOG"),
            "GoogleCloudApiGatewayClient",
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
    /// Create configs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisConfigsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new ApiConfig in a given project and location.
    /// </remarks>
    public Task<ApigatewayOperation> ApigatewayProjectsLocationsApisConfigsCreate(ApigatewayProjectsLocationsApisConfigsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [new Param("apiConfigId", request.ApiConfigId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayOperation>(),
            ApigatewayProjectsLocationsApisConfigsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete configs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisConfigsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single ApiConfig.
    /// </remarks>
    public Task<ApigatewayOperation> ApigatewayProjectsLocationsApisConfigsDelete(ApigatewayProjectsLocationsApisConfigsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("configsId", request.ConfigsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApigatewayOperation>(),
            ApigatewayProjectsLocationsApisConfigsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get configs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayApiConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisConfigsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details of a single ApiConfig.
    /// </remarks>
    public Task<ApigatewayApiConfig> ApigatewayProjectsLocationsApisConfigsGet(ApigatewayProjectsLocationsApisConfigsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("configsId", request.ConfigsId),
            ],
            [new Param("view", request.View)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApigatewayApiConfig>(),
            ApigatewayProjectsLocationsApisConfigsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy configs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisConfigsGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<ApigatewayPolicy> ApigatewayProjectsLocationsApisConfigsGetIamPolicy(ApigatewayProjectsLocationsApisConfigsGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("configsId", request.ConfigsId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApigatewayPolicy>(),
            ApigatewayProjectsLocationsApisConfigsGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List configs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayListApiConfigsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisConfigsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists ApiConfigs in a given project and location.
    /// </remarks>
    public Task<ApigatewayListApiConfigsResponse> ApigatewayProjectsLocationsApisConfigsList(ApigatewayProjectsLocationsApisConfigsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
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
            JsonResponse.Create<ApigatewayListApiConfigsResponse>(),
            ApigatewayProjectsLocationsApisConfigsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch configs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisConfigsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the parameters of a single ApiConfig.
    /// </remarks>
    public Task<ApigatewayOperation> ApigatewayProjectsLocationsApisConfigsPatch(ApigatewayProjectsLocationsApisConfigsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("configsId", request.ConfigsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayOperation>(),
            ApigatewayProjectsLocationsApisConfigsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy configs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisConfigsSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy. Can return <c>NOT_FOUND</c>, <c>INVALID_ARGUMENT</c>, and <c>PERMISSION_DENIED</c> errors.
    /// </remarks>
    public Task<ApigatewayPolicy> ApigatewayProjectsLocationsApisConfigsSetIamPolicy(ApigatewayProjectsLocationsApisConfigsSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("configsId", request.ConfigsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayPolicy>(),
            ApigatewayProjectsLocationsApisConfigsSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions configs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayTestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a <c>NOT_FOUND</c> error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<ApigatewayTestIamPermissionsResponse> ApigatewayProjectsLocationsApisConfigsTestIamPermissions(ApigatewayProjectsLocationsApisConfigsTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}/configs/{configsId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
                new TemplateParam("configsId", request.ConfigsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayTestIamPermissionsResponse>(),
            ApigatewayProjectsLocationsApisConfigsTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new Api in a given project and location.
    /// </remarks>
    public Task<ApigatewayOperation> ApigatewayProjectsLocationsApisCreate(ApigatewayProjectsLocationsApisCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("apiId", request.ApiId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayOperation>(),
            ApigatewayProjectsLocationsApisCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single Api.
    /// </remarks>
    public Task<ApigatewayOperation> ApigatewayProjectsLocationsApisDelete(ApigatewayProjectsLocationsApisDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApigatewayOperation>(),
            ApigatewayProjectsLocationsApisDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details of a single Api.
    /// </remarks>
    public Task<ApigatewayApi> ApigatewayProjectsLocationsApisGet(ApigatewayProjectsLocationsApisGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApigatewayApi>(),
            ApigatewayProjectsLocationsApisGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<ApigatewayPolicy> ApigatewayProjectsLocationsApisGetIamPolicy(ApigatewayProjectsLocationsApisGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApigatewayPolicy>(),
            ApigatewayProjectsLocationsApisGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayListApisResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists Apis in a given project and location.
    /// </remarks>
    public Task<ApigatewayListApisResponse> ApigatewayProjectsLocationsApisList(ApigatewayProjectsLocationsApisListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis"),
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
            JsonResponse.Create<ApigatewayListApisResponse>(),
            ApigatewayProjectsLocationsApisListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the parameters of a single Api.
    /// </remarks>
    public Task<ApigatewayOperation> ApigatewayProjectsLocationsApisPatch(ApigatewayProjectsLocationsApisPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayOperation>(),
            ApigatewayProjectsLocationsApisPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy. Can return <c>NOT_FOUND</c>, <c>INVALID_ARGUMENT</c>, and <c>PERMISSION_DENIED</c> errors.
    /// </remarks>
    public Task<ApigatewayPolicy> ApigatewayProjectsLocationsApisSetIamPolicy(ApigatewayProjectsLocationsApisSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayPolicy>(),
            ApigatewayProjectsLocationsApisSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions apis
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayTestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsApisTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a <c>NOT_FOUND</c> error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<ApigatewayTestIamPermissionsResponse> ApigatewayProjectsLocationsApisTestIamPermissions(ApigatewayProjectsLocationsApisTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/apis/{apisId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("apisId", request.ApisId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayTestIamPermissionsResponse>(),
            ApigatewayProjectsLocationsApisTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create gateways
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsGatewaysCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new Gateway in a given project and location.
    /// </remarks>
    public Task<ApigatewayOperation> ApigatewayProjectsLocationsGatewaysCreate(ApigatewayProjectsLocationsGatewaysCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/gateways"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("gatewayId", request.GatewayId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayOperation>(),
            ApigatewayProjectsLocationsGatewaysCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete gateways
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsGatewaysDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single Gateway.
    /// </remarks>
    public Task<ApigatewayOperation> ApigatewayProjectsLocationsGatewaysDelete(ApigatewayProjectsLocationsGatewaysDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("gatewaysId", request.GatewaysId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApigatewayOperation>(),
            ApigatewayProjectsLocationsGatewaysDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get gateways
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayGateway"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsGatewaysGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details of a single Gateway.
    /// </remarks>
    public Task<ApigatewayGateway> ApigatewayProjectsLocationsGatewaysGet(ApigatewayProjectsLocationsGatewaysGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("gatewaysId", request.GatewaysId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApigatewayGateway>(),
            ApigatewayProjectsLocationsGatewaysGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy gateways
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsGatewaysGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<ApigatewayPolicy> ApigatewayProjectsLocationsGatewaysGetIamPolicy(ApigatewayProjectsLocationsGatewaysGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("gatewaysId", request.GatewaysId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApigatewayPolicy>(),
            ApigatewayProjectsLocationsGatewaysGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List gateways
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayListGatewaysResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsGatewaysListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists Gateways in a given project and location.
    /// </remarks>
    public Task<ApigatewayListGatewaysResponse> ApigatewayProjectsLocationsGatewaysList(ApigatewayProjectsLocationsGatewaysListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/gateways"),
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
            JsonResponse.Create<ApigatewayListGatewaysResponse>(),
            ApigatewayProjectsLocationsGatewaysListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch gateways
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsGatewaysPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the parameters of a single Gateway.
    /// </remarks>
    public Task<ApigatewayOperation> ApigatewayProjectsLocationsGatewaysPatch(ApigatewayProjectsLocationsGatewaysPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("gatewaysId", request.GatewaysId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayOperation>(),
            ApigatewayProjectsLocationsGatewaysPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy gateways
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsGatewaysSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy. Can return <c>NOT_FOUND</c>, <c>INVALID_ARGUMENT</c>, and <c>PERMISSION_DENIED</c> errors.
    /// </remarks>
    public Task<ApigatewayPolicy> ApigatewayProjectsLocationsGatewaysSetIamPolicy(ApigatewayProjectsLocationsGatewaysSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("gatewaysId", request.GatewaysId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayPolicy>(),
            ApigatewayProjectsLocationsGatewaysSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions gateways
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayTestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsGatewaysTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a <c>NOT_FOUND</c> error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<ApigatewayTestIamPermissionsResponse> ApigatewayProjectsLocationsGatewaysTestIamPermissions(ApigatewayProjectsLocationsGatewaysTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/gateways/{gatewaysId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("gatewaysId", request.GatewaysId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApigatewayTestIamPermissionsResponse>(),
            ApigatewayProjectsLocationsGatewaysTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayLocation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about a location.
    /// </remarks>
    public Task<ApigatewayLocation> ApigatewayProjectsLocationsGet(ApigatewayProjectsLocationsGetRequest request,
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
            JsonResponse.Create<ApigatewayLocation>(),
            ApigatewayProjectsLocationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayListLocationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * <b>Global locations</b>: If <c>name</c> is empty, the method lists the public locations available to all projects. * <b>Project-specific locations</b>: If <c>name</c> follows the format <c>projects/{project}</c>, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the <c>name</c> field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
    /// </remarks>
    public Task<ApigatewayListLocationsResponse> ApigatewayProjectsLocationsList(ApigatewayProjectsLocationsListRequest request,
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
            JsonResponse.Create<ApigatewayListLocationsResponse>(),
            ApigatewayProjectsLocationsListError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsOperationsCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of <c>1</c>, corresponding to <c>Code.CANCELLED</c>.
    /// </remarks>
    public Task<object> ApigatewayProjectsLocationsOperationsCancel(ApigatewayProjectsLocationsOperationsCancelRequest request,
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
            ApigatewayProjectsLocationsOperationsCancelError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsOperationsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<object> ApigatewayProjectsLocationsOperationsDelete(ApigatewayProjectsLocationsOperationsDeleteRequest request,
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
            ApigatewayProjectsLocationsOperationsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayOperation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<ApigatewayOperation> ApigatewayProjectsLocationsOperationsGet(ApigatewayProjectsLocationsOperationsGetRequest request,
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
            JsonResponse.Create<ApigatewayOperation>(),
            ApigatewayProjectsLocationsOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApigatewayListOperationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ApigatewayProjectsLocationsOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns <c>UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<ApigatewayListOperationsResponse> ApigatewayProjectsLocationsOperationsList(ApigatewayProjectsLocationsOperationsListRequest request,
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
            JsonResponse.Create<ApigatewayListOperationsResponse>(),
            ApigatewayProjectsLocationsOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
