using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudBuild.Core;
using GoogleCloudBuild.Core.Authentication;
using GoogleCloudBuild.Core.Configuration;
using GoogleCloudBuild.Core.Exceptions;
using GoogleCloudBuild.Core.Logging;
using GoogleCloudBuild.Core.Models;
using GoogleCloudBuild.Core.Request;
using GoogleCloudBuild.Core.Response;
using GoogleCloudBuild.Errors;
using GoogleCloudBuild.Models;
using GoogleCloudBuild.Requests;

namespace GoogleCloudBuild;

/// <summary>
/// Generated from Google's published Discovery document for Cloud Build API (cloudbuild v2, revision 20261106). 22 operation(s).
/// </summary>
public sealed class GoogleCloudBuildClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleCloudBuildClient(HttpClient httpClient, GoogleCloudBuildClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleCloudBuildClient/v2 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v2"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_CLOUD_BUILD_LOG"),
            "GoogleCloudBuildClient",
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
    /// Create connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Connection.
    /// </remarks>
    public Task<Operation> CloudbuildProjectsLocationsConnectionsCreate(CloudbuildProjectsLocationsConnectionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/connections"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("connectionId", request.ConnectionId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            CloudbuildProjectsLocationsConnectionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single connection.
    /// </remarks>
    public Task<Operation> CloudbuildProjectsLocationsConnectionsDelete(CloudbuildProjectsLocationsConnectionsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
            ],
            [new Param("etag", request.Etag), new Param("validateOnly", request.ValidateOnly)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            CloudbuildProjectsLocationsConnectionsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch linkable repositories connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FetchLinkableRepositoriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.
    /// </remarks>
    public Task<FetchLinkableRepositoriesResponse> CloudbuildProjectsLocationsConnectionsFetchLinkableRepositories(CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:fetchLinkableRepositories"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FetchLinkableRepositoriesResponse>(),
            CloudbuildProjectsLocationsConnectionsFetchLinkableRepositoriesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Connection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details of a single connection.
    /// </remarks>
    public Task<Connection> CloudbuildProjectsLocationsConnectionsGet(CloudbuildProjectsLocationsConnectionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Connection>(),
            CloudbuildProjectsLocationsConnectionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> CloudbuildProjectsLocationsConnectionsGetIamPolicy(CloudbuildProjectsLocationsConnectionsGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy>(),
            CloudbuildProjectsLocationsConnectionsGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListConnectionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists Connections in a given project and location.
    /// </remarks>
    public Task<ListConnectionsResponse> CloudbuildProjectsLocationsConnectionsList(CloudbuildProjectsLocationsConnectionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/connections"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("returnPartialSuccess", request.ReturnPartialSuccess),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListConnectionsResponse>(),
            CloudbuildProjectsLocationsConnectionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a single connection.
    /// </remarks>
    public Task<Operation> CloudbuildProjectsLocationsConnectionsPatch(CloudbuildProjectsLocationsConnectionsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
            ],
            [
                new Param("allowMissing", request.AllowMissing),
                new Param("etag", request.Etag),
                new Param("updateMask", request.UpdateMask),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            CloudbuildProjectsLocationsConnectionsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Process webhook connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsProcessWebhookError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// ProcessWebhook is called by the external SCM for notifying of events.
    /// </remarks>
    public Task<object> CloudbuildProjectsLocationsConnectionsProcessWebhook(CloudbuildProjectsLocationsConnectionsProcessWebhookRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/connections:processWebhook"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("webhookKey", request.WebhookKey)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            CloudbuildProjectsLocationsConnectionsProcessWebhookError.Response,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access read token repositories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FetchReadTokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches read token of a given repository.
    /// </remarks>
    public Task<FetchReadTokenResponse> CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadToken(CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadToken"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
                new TemplateParam("repositoriesId", request.RepositoriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FetchReadTokenResponse>(),
            CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadTokenError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access read write token repositories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FetchReadWriteTokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches read/write token of a given repository.
    /// </remarks>
    public Task<FetchReadWriteTokenResponse> CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteToken(CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:accessReadWriteToken"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
                new TemplateParam("repositoriesId", request.RepositoriesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<FetchReadWriteTokenResponse>(),
            CloudbuildProjectsLocationsConnectionsRepositoriesAccessReadWriteTokenError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch create repositories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates multiple repositories inside a connection.
    /// </remarks>
    public Task<Operation> CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreate(CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories:batchCreate"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            CloudbuildProjectsLocationsConnectionsRepositoriesBatchCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create repositories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsRepositoriesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a Repository.
    /// </remarks>
    public Task<Operation> CloudbuildProjectsLocationsConnectionsRepositoriesCreate(CloudbuildProjectsLocationsConnectionsRepositoriesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
            ],
            [new Param("repositoryId", request.RepositoryId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            CloudbuildProjectsLocationsConnectionsRepositoriesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete repositories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single repository.
    /// </remarks>
    public Task<Operation> CloudbuildProjectsLocationsConnectionsRepositoriesDelete(CloudbuildProjectsLocationsConnectionsRepositoriesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
                new TemplateParam("repositoriesId", request.RepositoriesId),
            ],
            [new Param("etag", request.Etag), new Param("validateOnly", request.ValidateOnly)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            CloudbuildProjectsLocationsConnectionsRepositoriesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch git refs repositories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FetchGitRefsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch the list of branches or tags for a given repository.
    /// </remarks>
    public Task<FetchGitRefsResponse> CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefs(CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}:fetchGitRefs"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
                new TemplateParam("repositoriesId", request.RepositoriesId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("refType", request.RefType),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FetchGitRefsResponse>(),
            CloudbuildProjectsLocationsConnectionsRepositoriesFetchGitRefsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get repositories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Repository"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsRepositoriesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details of a single repository.
    /// </remarks>
    public Task<Repository> CloudbuildProjectsLocationsConnectionsRepositoriesGet(CloudbuildProjectsLocationsConnectionsRepositoriesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories/{repositoriesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
                new TemplateParam("repositoriesId", request.RepositoriesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Repository>(),
            CloudbuildProjectsLocationsConnectionsRepositoriesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List repositories
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListRepositoriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsRepositoriesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists Repositories in a given connection.
    /// </remarks>
    public Task<ListRepositoriesResponse> CloudbuildProjectsLocationsConnectionsRepositoriesList(CloudbuildProjectsLocationsConnectionsRepositoriesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}/repositories"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
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
            JsonResponse.Create<ListRepositoriesResponse>(),
            CloudbuildProjectsLocationsConnectionsRepositoriesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy. Can return <c>NOT_FOUND</c>, <c>INVALID_ARGUMENT</c>, and <c>PERMISSION_DENIED</c> errors.
    /// </remarks>
    public Task<Policy> CloudbuildProjectsLocationsConnectionsSetIamPolicy(CloudbuildProjectsLocationsConnectionsSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            CloudbuildProjectsLocationsConnectionsSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions connections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsConnectionsTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a <c>NOT_FOUND</c> error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> CloudbuildProjectsLocationsConnectionsTestIamPermissions(CloudbuildProjectsLocationsConnectionsTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/connections/{connectionsId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionsId", request.ConnectionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            CloudbuildProjectsLocationsConnectionsTestIamPermissionsError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about a location.
    /// </remarks>
    public Task<Location> CloudbuildProjectsLocationsGet(CloudbuildProjectsLocationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Location>(),
            CloudbuildProjectsLocationsGetError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * <b>Global locations</b>: If <c>name</c> is empty, the method lists the public locations available to all projects. * <b>Project-specific locations</b>: If <c>name</c> follows the format <c>projects/{project}</c>, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the <c>name</c> field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
    /// </remarks>
    public Task<ListLocationsResponse> CloudbuildProjectsLocationsList(CloudbuildProjectsLocationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations"),
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
            CloudbuildProjectsLocationsListError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsOperationsCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of <c>1</c>, corresponding to <c>Code.CANCELLED</c>.
    /// </remarks>
    public Task<object> CloudbuildProjectsLocationsOperationsCancel(CloudbuildProjectsLocationsOperationsCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}:cancel"),
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
            CloudbuildProjectsLocationsOperationsCancelError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudbuildProjectsLocationsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<Operation> CloudbuildProjectsLocationsOperationsGet(CloudbuildProjectsLocationsOperationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            CloudbuildProjectsLocationsOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
