using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudDatastream.Core;
using GoogleCloudDatastream.Core.Authentication;
using GoogleCloudDatastream.Core.Configuration;
using GoogleCloudDatastream.Core.Exceptions;
using GoogleCloudDatastream.Core.Logging;
using GoogleCloudDatastream.Core.Models;
using GoogleCloudDatastream.Core.Request;
using GoogleCloudDatastream.Core.Response;
using GoogleCloudDatastream.Errors;
using GoogleCloudDatastream.Models;
using GoogleCloudDatastream.Requests;

namespace GoogleCloudDatastream;

/// <summary>
/// Generated from Google's published Discovery document for Datastream API (datastream v1, revision 20261028). 32 operation(s).
/// </summary>
public sealed class GoogleCloudDatastreamClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleCloudDatastreamClient(HttpClient httpClient, GoogleCloudDatastreamClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleCloudDatastreamClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_CLOUD_DATASTREAM_LOG"),
            "GoogleCloudDatastreamClient",
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
    /// Create connectionProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsConnectionProfilesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to create a connection profile in a project and location.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsConnectionProfilesCreate(DatastreamProjectsLocationsConnectionProfilesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("connectionProfileId", request.ConnectionProfileId),
                new Param("force", request.Force),
                new Param("requestId", request.RequestId),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsConnectionProfilesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete connectionProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsConnectionProfilesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to delete a connection profile.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsConnectionProfilesDelete(DatastreamProjectsLocationsConnectionProfilesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionProfilesId", request.ConnectionProfilesId),
            ],
            [new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsConnectionProfilesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Discover connectionProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DiscoverConnectionProfileResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsConnectionProfilesDiscoverError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects of a parent data object that's optionally supplied in the request.
    /// </remarks>
    public Task<DiscoverConnectionProfileResponse> DatastreamProjectsLocationsConnectionProfilesDiscover(DatastreamProjectsLocationsConnectionProfilesDiscoverRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles:discover"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DiscoverConnectionProfileResponse>(),
            DatastreamProjectsLocationsConnectionProfilesDiscoverError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get connectionProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConnectionProfile"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsConnectionProfilesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to get details about a connection profile.
    /// </remarks>
    public Task<ConnectionProfile> DatastreamProjectsLocationsConnectionProfilesGet(DatastreamProjectsLocationsConnectionProfilesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionProfilesId", request.ConnectionProfilesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ConnectionProfile>(),
            DatastreamProjectsLocationsConnectionProfilesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List connectionProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListConnectionProfilesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsConnectionProfilesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to list connection profiles created in a project and location.
    /// </remarks>
    public Task<ListConnectionProfilesResponse> DatastreamProjectsLocationsConnectionProfilesList(DatastreamProjectsLocationsConnectionProfilesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles"),
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
            JsonResponse.Create<ListConnectionProfilesResponse>(),
            DatastreamProjectsLocationsConnectionProfilesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch connectionProfiles
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsConnectionProfilesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to update the parameters of a connection profile.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsConnectionProfilesPatch(DatastreamProjectsLocationsConnectionProfilesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/connectionProfiles/{connectionProfilesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("connectionProfilesId", request.ConnectionProfilesId),
            ],
            [
                new Param("force", request.Force),
                new Param("requestId", request.RequestId),
                new Param("updateMask", request.UpdateMask),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsConnectionProfilesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch static ips locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FetchStaticIpsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsFetchStaticIpsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The FetchStaticIps API call exposes the static IP addresses used by Datastream.
    /// </remarks>
    public Task<FetchStaticIpsResponse> DatastreamProjectsLocationsFetchStaticIps(DatastreamProjectsLocationsFetchStaticIpsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}:fetchStaticIps"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FetchStaticIpsResponse>(),
            DatastreamProjectsLocationsFetchStaticIpsError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about a location.
    /// </remarks>
    public Task<Location> DatastreamProjectsLocationsGet(DatastreamProjectsLocationsGetRequest request,
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
            DatastreamProjectsLocationsGetError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * <b>Global locations</b>: If <c>name</c> is empty, the method lists the public locations available to all projects. * <b>Project-specific locations</b>: If <c>name</c> follows the format <c>projects/{project}</c>, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the <c>name</c> field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
    /// </remarks>
    public Task<ListLocationsResponse> DatastreamProjectsLocationsList(DatastreamProjectsLocationsListRequest request,
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
            DatastreamProjectsLocationsListError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsOperationsCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of <c>1</c>, corresponding to <c>Code.CANCELLED</c>.
    /// </remarks>
    public Task<object> DatastreamProjectsLocationsOperationsCancel(DatastreamProjectsLocationsOperationsCancelRequest request,
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
            DatastreamProjectsLocationsOperationsCancelError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsOperationsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns <c>google.rpc.Code.UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<object> DatastreamProjectsLocationsOperationsDelete(DatastreamProjectsLocationsOperationsDeleteRequest request,
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
            DatastreamProjectsLocationsOperationsDeleteError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsOperationsGet(DatastreamProjectsLocationsOperationsGetRequest request,
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
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListOperationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns <c>UNIMPLEMENTED</c>.
    /// </remarks>
    public Task<ListOperationsResponse> DatastreamProjectsLocationsOperationsList(DatastreamProjectsLocationsOperationsListRequest request,
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
            JsonResponse.Create<ListOperationsResponse>(),
            DatastreamProjectsLocationsOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create privateConnections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsPrivateConnectionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to create a private connectivity configuration.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsPrivateConnectionsCreate(DatastreamProjectsLocationsPrivateConnectionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/privateConnections"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("force", request.Force),
                new Param("privateConnectionId", request.PrivateConnectionId),
                new Param("requestId", request.RequestId),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsPrivateConnectionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete privateConnections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsPrivateConnectionsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to delete a private connectivity configuration.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsPrivateConnectionsDelete(DatastreamProjectsLocationsPrivateConnectionsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("privateConnectionsId", request.PrivateConnectionsId),
            ],
            [new Param("force", request.Force), new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsPrivateConnectionsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get privateConnections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PrivateConnection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsPrivateConnectionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to get details about a private connectivity configuration.
    /// </remarks>
    public Task<PrivateConnection> DatastreamProjectsLocationsPrivateConnectionsGet(DatastreamProjectsLocationsPrivateConnectionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("privateConnectionsId", request.PrivateConnectionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PrivateConnection>(),
            DatastreamProjectsLocationsPrivateConnectionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List privateConnections
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListPrivateConnectionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsPrivateConnectionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to list private connectivity configurations in a project and location.
    /// </remarks>
    public Task<ListPrivateConnectionsResponse> DatastreamProjectsLocationsPrivateConnectionsList(DatastreamProjectsLocationsPrivateConnectionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/privateConnections"),
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
            JsonResponse.Create<ListPrivateConnectionsResponse>(),
            DatastreamProjectsLocationsPrivateConnectionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create routes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to create a route for a private connectivity configuration in a project and location.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsPrivateConnectionsRoutesCreate(DatastreamProjectsLocationsPrivateConnectionsRoutesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("privateConnectionsId", request.PrivateConnectionsId),
            ],
            [new Param("requestId", request.RequestId), new Param("routeId", request.RouteId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsPrivateConnectionsRoutesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete routes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to delete a route.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsPrivateConnectionsRoutesDelete(DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes/{routesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("privateConnectionsId", request.PrivateConnectionsId),
                new TemplateParam("routesId", request.RoutesId),
            ],
            [new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsPrivateConnectionsRoutesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get routes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Route"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsPrivateConnectionsRoutesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to get details about a route.
    /// </remarks>
    public Task<Route> DatastreamProjectsLocationsPrivateConnectionsRoutesGet(DatastreamProjectsLocationsPrivateConnectionsRoutesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes/{routesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("privateConnectionsId", request.PrivateConnectionsId),
                new TemplateParam("routesId", request.RoutesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Route>(),
            DatastreamProjectsLocationsPrivateConnectionsRoutesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List routes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListRoutesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsPrivateConnectionsRoutesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to list routes created for a private connectivity configuration in a project and location.
    /// </remarks>
    public Task<ListRoutesResponse> DatastreamProjectsLocationsPrivateConnectionsRoutesList(DatastreamProjectsLocationsPrivateConnectionsRoutesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/privateConnections/{privateConnectionsId}/routes"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("privateConnectionsId", request.PrivateConnectionsId),
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
            JsonResponse.Create<ListRoutesResponse>(),
            DatastreamProjectsLocationsPrivateConnectionsRoutesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create streams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsStreamsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to create a stream.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsStreamsCreate(DatastreamProjectsLocationsStreamsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/streams"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("force", request.Force),
                new Param("requestId", request.RequestId),
                new Param("streamId", request.StreamId),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsStreamsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete streams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsStreamsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to delete a stream.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsStreamsDelete(DatastreamProjectsLocationsStreamsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("streamsId", request.StreamsId),
            ],
            [new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsStreamsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get streams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Stream"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsStreamsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to get details about a stream.
    /// </remarks>
    public Task<Stream> DatastreamProjectsLocationsStreamsGet(DatastreamProjectsLocationsStreamsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("streamsId", request.StreamsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Stream>(),
            DatastreamProjectsLocationsStreamsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List streams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListStreamsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsStreamsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to list streams in a project and location.
    /// </remarks>
    public Task<ListStreamsResponse> DatastreamProjectsLocationsStreamsList(DatastreamProjectsLocationsStreamsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/streams"),
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
            JsonResponse.Create<ListStreamsResponse>(),
            DatastreamProjectsLocationsStreamsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get objects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StreamObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsStreamsObjectsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to get details about a stream object.
    /// </remarks>
    public Task<StreamObject> DatastreamProjectsLocationsStreamsObjectsGet(DatastreamProjectsLocationsStreamsObjectsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("streamsId", request.StreamsId),
                new TemplateParam("objectsId", request.ObjectsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StreamObject>(),
            DatastreamProjectsLocationsStreamsObjectsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List objects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListStreamObjectsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsStreamsObjectsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to list the objects of a specific stream.
    /// </remarks>
    public Task<ListStreamObjectsResponse> DatastreamProjectsLocationsStreamsObjectsList(DatastreamProjectsLocationsStreamsObjectsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("streamsId", request.StreamsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListStreamObjectsResponse>(),
            DatastreamProjectsLocationsStreamsObjectsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Lookup objects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StreamObject"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsStreamsObjectsLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to look up a stream object by its source object identifier.
    /// </remarks>
    public Task<StreamObject> DatastreamProjectsLocationsStreamsObjectsLookup(DatastreamProjectsLocationsStreamsObjectsLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects:lookup"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("streamsId", request.StreamsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StreamObject>(),
            DatastreamProjectsLocationsStreamsObjectsLookupError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start backfill job objects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartBackfillJobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to start a backfill job for the specified stream object.
    /// </remarks>
    public Task<StartBackfillJobResponse> DatastreamProjectsLocationsStreamsObjectsStartBackfillJob(DatastreamProjectsLocationsStreamsObjectsStartBackfillJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}:startBackfillJob"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("streamsId", request.StreamsId),
                new TemplateParam("objectsId", request.ObjectsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartBackfillJobResponse>(),
            DatastreamProjectsLocationsStreamsObjectsStartBackfillJobError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop backfill job objects
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StopBackfillJobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to stop a backfill job for the specified stream object.
    /// </remarks>
    public Task<StopBackfillJobResponse> DatastreamProjectsLocationsStreamsObjectsStopBackfillJob(DatastreamProjectsLocationsStreamsObjectsStopBackfillJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}/objects/{objectsId}:stopBackfillJob"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("streamsId", request.StreamsId),
                new TemplateParam("objectsId", request.ObjectsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StopBackfillJobResponse>(),
            DatastreamProjectsLocationsStreamsObjectsStopBackfillJobError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch streams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsStreamsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to update the configuration of a stream.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsStreamsPatch(DatastreamProjectsLocationsStreamsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("streamsId", request.StreamsId),
            ],
            [
                new Param("force", request.Force),
                new Param("requestId", request.RequestId),
                new Param("updateMask", request.UpdateMask),
                new Param("validateOnly", request.ValidateOnly),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsStreamsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run streams
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DatastreamProjectsLocationsStreamsRunError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Use this method to start, resume or recover a stream with a non default CDC strategy.
    /// </remarks>
    public Task<Operation> DatastreamProjectsLocationsStreamsRun(DatastreamProjectsLocationsStreamsRunRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/streams/{streamsId}:run"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("streamsId", request.StreamsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DatastreamProjectsLocationsStreamsRunError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
