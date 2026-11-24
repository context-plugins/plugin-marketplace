using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudDataproc.Core;
using GoogleCloudDataproc.Core.Authentication;
using GoogleCloudDataproc.Core.Configuration;
using GoogleCloudDataproc.Core.Exceptions;
using GoogleCloudDataproc.Core.Logging;
using GoogleCloudDataproc.Core.Models;
using GoogleCloudDataproc.Core.Request;
using GoogleCloudDataproc.Core.Response;
using GoogleCloudDataproc.Errors;
using GoogleCloudDataproc.Models;
using GoogleCloudDataproc.Requests;

namespace GoogleCloudDataproc;

/// <summary>
/// Operations tagged Projects across 2 of this provider's published API definitions: google-cloud-dataproc-dataproc-projects-api-openapi.yml, google-cloud-dataproc-metastore-projects-api-openapi.yml. Each path carries the servers of the definition it was published in.
/// </summary>
public sealed class GoogleCloudDataprocClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleCloudDataprocClient(HttpClient httpClient, GoogleCloudDataprocClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleCloudDataprocClient/v1 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v1"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_CLOUD_DATAPROC_LOG"),
            "GoogleCloudDataprocClient",
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
    /// Create autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutoscalingPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsAutoscalingPoliciesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates new autoscaling policy.
    /// </remarks>
    public Task<AutoscalingPolicy> DataprocProjectsLocationsAutoscalingPoliciesCreate(DataprocProjectsLocationsAutoscalingPoliciesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AutoscalingPolicy>(),
            DataprocProjectsLocationsAutoscalingPoliciesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsAutoscalingPoliciesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.
    /// </remarks>
    public Task<object> DataprocProjectsLocationsAutoscalingPoliciesDelete(DataprocProjectsLocationsAutoscalingPoliciesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DataprocProjectsLocationsAutoscalingPoliciesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutoscalingPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsAutoscalingPoliciesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves autoscaling policy.
    /// </remarks>
    public Task<AutoscalingPolicy> DataprocProjectsLocationsAutoscalingPoliciesGet(DataprocProjectsLocationsAutoscalingPoliciesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AutoscalingPolicy>(),
            DataprocProjectsLocationsAutoscalingPoliciesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicy(DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsLocationsAutoscalingPoliciesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAutoscalingPoliciesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsAutoscalingPoliciesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists autoscaling policies in the project.
    /// </remarks>
    public Task<ListAutoscalingPoliciesResponse> DataprocProjectsLocationsAutoscalingPoliciesList(DataprocProjectsLocationsAutoscalingPoliciesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListAutoscalingPoliciesResponse>(),
            DataprocProjectsLocationsAutoscalingPoliciesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy> DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicy(DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsLocationsAutoscalingPoliciesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissions(DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            DataprocProjectsLocationsAutoscalingPoliciesTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutoscalingPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsAutoscalingPoliciesUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.
    /// </remarks>
    public Task<AutoscalingPolicy> DataprocProjectsLocationsAutoscalingPoliciesUpdate(DataprocProjectsLocationsAutoscalingPoliciesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/autoscalingPolicies/{autoscalingPoliciesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AutoscalingPolicy>(),
            DataprocProjectsLocationsAutoscalingPoliciesUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Analyze batches
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesAnalyzeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Analyze a Batch for possible recommendations and insights.
    /// </remarks>
    public Task<Operation> DataprocProjectsLocationsBatchesAnalyze(DataprocProjectsLocationsBatchesAnalyzeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}:analyze"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsLocationsBatchesAnalyzeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create batches
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a batch workload that executes asynchronously.
    /// </remarks>
    public Task<Operation> DataprocProjectsLocationsBatchesCreate(DataprocProjectsLocationsBatchesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/batches"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("batchId", request.BatchId), new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsLocationsBatchesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete batches
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the batch workload resource. If the batch is not in a CANCELLED, SUCCEEDED or FAILED State, the delete operation fails and the response returns FAILED_PRECONDITION.
    /// </remarks>
    public Task<object> DataprocProjectsLocationsBatchesDelete(DataprocProjectsLocationsBatchesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DataprocProjectsLocationsBatchesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get batches
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Batch"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the batch workload resource representation.
    /// </remarks>
    public Task<Batch> DataprocProjectsLocationsBatchesGet(DataprocProjectsLocationsBatchesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Batch>(),
            DataprocProjectsLocationsBatchesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List batches
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBatchesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists batch workloads.
    /// </remarks>
    public Task<ListBatchesResponse> DataprocProjectsLocationsBatchesList(DataprocProjectsLocationsBatchesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/batches"),
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
            JsonResponse.Create<ListBatchesResponse>(),
            DataprocProjectsLocationsBatchesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSparkApplicationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsAccessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain high level information corresponding to a single Spark Application.
    /// </remarks>
    public Task<AccessSparkApplicationResponse> DataprocProjectsLocationsBatchesSparkApplicationsAccess(DataprocProjectsLocationsBatchesSparkApplicationsAccessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:access"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSparkApplicationResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsAccessError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access environment info sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSparkApplicationEnvironmentInfoResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain environment details for a Spark Application
    /// </remarks>
    public Task<AccessSparkApplicationEnvironmentInfoResponse> DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfo(DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessEnvironmentInfo"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSparkApplicationEnvironmentInfoResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsAccessEnvironmentInfoError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access job sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSparkApplicationJobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to a spark job for a Spark Application.
    /// </remarks>
    public Task<AccessSparkApplicationJobResponse> DataprocProjectsLocationsBatchesSparkApplicationsAccessJob(DataprocProjectsLocationsBatchesSparkApplicationsAccessJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessJob"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("jobId", request.JobId), new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSparkApplicationJobResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsAccessJobError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access native build info sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSparkApplicationNativeBuildInfoResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain build data for Native Job
    /// </remarks>
    public Task<AccessSparkApplicationNativeBuildInfoResponse> DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfo(DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessNativeBuildInfo"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSparkApplicationNativeBuildInfoResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeBuildInfoError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access native sql query sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSparkApplicationNativeSqlQueryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to a particular Native SQL Query for a Spark Application.
    /// </remarks>
    public Task<AccessSparkApplicationNativeSqlQueryResponse> DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQuery(DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessNativeSqlQuery"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("executionId", request.ExecutionId), new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSparkApplicationNativeSqlQueryResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsAccessNativeSqlQueryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access sql plan sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSparkApplicationSqlSparkPlanGraphResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.
    /// </remarks>
    public Task<AccessSparkApplicationSqlSparkPlanGraphResponse> DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlan(DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessSqlPlan"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("executionId", request.ExecutionId), new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSparkApplicationSqlSparkPlanGraphResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlPlanError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access sql query sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSparkApplicationSqlQueryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to a particular SQL Query for a Spark Application.
    /// </remarks>
    public Task<AccessSparkApplicationSqlQueryResponse> DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQuery(DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessSqlQuery"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("details", request.Details),
                new Param("executionId", request.ExecutionId),
                new Param("parent", request.Parent),
                new Param("planDescription", request.PlanDescription),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSparkApplicationSqlQueryResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsAccessSqlQueryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access stage attempt sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSparkApplicationStageAttemptResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to a spark stage attempt for a Spark Application.
    /// </remarks>
    public Task<AccessSparkApplicationStageAttemptResponse> DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttempt(DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessStageAttempt"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("parent", request.Parent),
                new Param("stageAttemptId", request.StageAttemptId),
                new Param("stageId", request.StageId),
                new Param("summaryMetricsMask", request.SummaryMetricsMask),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSparkApplicationStageAttemptResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsAccessStageAttemptError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access stage rdd graph sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSparkApplicationStageRddOperationGraphResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.
    /// </remarks>
    public Task<AccessSparkApplicationStageRddOperationGraphResponse> DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraph(DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:accessStageRddGraph"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent), new Param("stageId", request.StageId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSparkApplicationStageRddOperationGraphResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsAccessStageRddGraphError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Compute tuning config sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ComputeTuningConfigResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns autotuning configuration for a specific query plan id and cohort id. Called by Spark during query planning.
    /// </remarks>
    public Task<ComputeTuningConfigResponse> DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfig(DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:computeTuningConfig"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("executionId", request.ExecutionId),
                new Param("parent", request.Parent),
                new Param("semanticQueryId", request.SemanticQueryId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ComputeTuningConfigResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsComputeTuningConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSparkApplicationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain high level information and list of Spark Applications corresponding to a batch
    /// </remarks>
    public Task<SearchSparkApplicationsResponse> DataprocProjectsLocationsBatchesSparkApplicationsSearch(DataprocProjectsLocationsBatchesSparkApplicationsSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications:search"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
            ],
            [
                new Param("applicationStatus", request.ApplicationStatus),
                new Param("maxEndTime", request.MaxEndTime),
                new Param("maxTime", request.MaxTime),
                new Param("minEndTime", request.MinEndTime),
                new Param("minTime", request.MinTime),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSparkApplicationsResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSearchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search executor stage summary sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSparkApplicationExecutorStageSummaryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain executor summary with respect to a spark stage attempt.
    /// </remarks>
    public Task<SearchSparkApplicationExecutorStageSummaryResponse> DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummary(DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchExecutorStageSummary"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
                new Param("stageAttemptId", request.StageAttemptId),
                new Param("stageId", request.StageId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSparkApplicationExecutorStageSummaryResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorStageSummaryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search executors sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSparkApplicationExecutorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to executors for a Spark Application.
    /// </remarks>
    public Task<SearchSparkApplicationExecutorsResponse> DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutors(DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchExecutors"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("executorStatus", request.ExecutorStatus),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSparkApplicationExecutorsResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSearchExecutorsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search jobs sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSparkApplicationJobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain list of spark jobs corresponding to a Spark Application.
    /// </remarks>
    public Task<SearchSparkApplicationJobsResponse> DataprocProjectsLocationsBatchesSparkApplicationsSearchJobs(DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchJobs"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("jobStatus", request.JobStatus),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSparkApplicationJobsResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSearchJobsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search native sql queries sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSparkApplicationNativeSqlQueriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to Native SQL Queries for a Spark Application.
    /// </remarks>
    public Task<SearchSparkApplicationNativeSqlQueriesResponse> DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueries(DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchNativeSqlQueries"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSparkApplicationNativeSqlQueriesResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSearchNativeSqlQueriesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search sql queries sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSparkApplicationSqlQueriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to SQL Queries for a Spark Application.
    /// </remarks>
    public Task<SearchSparkApplicationSqlQueriesResponse> DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueries(DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchSqlQueries"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("details", request.Details),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
                new Param("planDescription", request.PlanDescription),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSparkApplicationSqlQueriesResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSearchSqlQueriesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search stage attempt tasks sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSparkApplicationStageAttemptTasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.
    /// </remarks>
    public Task<SearchSparkApplicationStageAttemptTasksResponse> DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasks(DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStageAttemptTasks"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
                new Param("sortRuntime", request.SortRuntime),
                new Param("stageAttemptId", request.StageAttemptId),
                new Param("stageId", request.StageId),
                new Param("taskStatus", request.TaskStatus),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSparkApplicationStageAttemptTasksResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptTasksError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search stage attempts sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSparkApplicationStageAttemptsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to a spark stage attempts for a Spark Application.
    /// </remarks>
    public Task<SearchSparkApplicationStageAttemptsResponse> DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttempts(DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStageAttempts"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
                new Param("stageId", request.StageId),
                new Param("summaryMetricsMask", request.SummaryMetricsMask),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSparkApplicationStageAttemptsResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSearchStageAttemptsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search stages sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSparkApplicationStagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to stages for a Spark Application.
    /// </remarks>
    public Task<SearchSparkApplicationStagesResponse> DataprocProjectsLocationsBatchesSparkApplicationsSearchStages(DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:searchStages"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
                new Param("stageStatus", request.StageStatus),
                new Param("summaryMetricsMask", request.SummaryMetricsMask),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSparkApplicationStagesResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSearchStagesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarize executors sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummarizeSparkApplicationExecutorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain summary of Executor Summary for a Spark Application
    /// </remarks>
    public Task<SummarizeSparkApplicationExecutorsResponse> DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutors(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeExecutors"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SummarizeSparkApplicationExecutorsResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSummarizeExecutorsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarize jobs sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummarizeSparkApplicationJobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain summary of Jobs for a Spark Application
    /// </remarks>
    public Task<SummarizeSparkApplicationJobsResponse> DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobs(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeJobs"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SummarizeSparkApplicationJobsResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSummarizeJobsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarize stage attempt tasks sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummarizeSparkApplicationStageAttemptTasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain summary of Tasks for a Spark Application Stage Attempt
    /// </remarks>
    public Task<SummarizeSparkApplicationStageAttemptTasksResponse> DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasks(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeStageAttemptTasks"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("parent", request.Parent),
                new Param("stageAttemptId", request.StageAttemptId),
                new Param("stageId", request.StageId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SummarizeSparkApplicationStageAttemptTasksResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStageAttemptTasksError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarize stages sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummarizeSparkApplicationStagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain summary of Stages for a Spark Application
    /// </remarks>
    public Task<SummarizeSparkApplicationStagesResponse> DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStages(DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:summarizeStages"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SummarizeSparkApplicationStagesResponse>(),
            DataprocProjectsLocationsBatchesSparkApplicationsSummarizeStagesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Write sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsBatchesSparkApplicationsWriteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Write wrapper objects from dataplane to spanner
    /// </remarks>
    public Task<object> DataprocProjectsLocationsBatchesSparkApplicationsWrite(DataprocProjectsLocationsBatchesSparkApplicationsWriteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/batches/{batchesId}/sparkApplications/{sparkApplicationsId}:write"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("batchesId", request.BatchesId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            DataprocProjectsLocationsBatchesSparkApplicationsWriteError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsOperationsCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
    /// </remarks>
    public Task<object> DataprocProjectsLocationsOperationsCancel(DataprocProjectsLocationsOperationsCancelRequest request,
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
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DataprocProjectsLocationsOperationsCancelError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsOperationsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
    /// </remarks>
    public Task<object> DataprocProjectsLocationsOperationsDelete(DataprocProjectsLocationsOperationsDeleteRequest request,
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
            DataprocProjectsLocationsOperationsDeleteError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<Operation> DataprocProjectsLocationsOperationsGet(DataprocProjectsLocationsOperationsGetRequest request,
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
            DataprocProjectsLocationsOperationsGetError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
    /// </remarks>
    public Task<ListOperationsResponse> DataprocProjectsLocationsOperationsList(DataprocProjectsLocationsOperationsListRequest request,
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
            DataprocProjectsLocationsOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create sessionTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SessionTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionTemplatesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a session template synchronously.
    /// </remarks>
    public Task<SessionTemplate> DataprocProjectsLocationsSessionTemplatesCreate(DataprocProjectsLocationsSessionTemplatesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SessionTemplate>(),
            DataprocProjectsLocationsSessionTemplatesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete sessionTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionTemplatesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a session template.
    /// </remarks>
    public Task<object> DataprocProjectsLocationsSessionTemplatesDelete(DataprocProjectsLocationsSessionTemplatesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionTemplatesId", request.SessionTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DataprocProjectsLocationsSessionTemplatesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get sessionTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SessionTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionTemplatesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the resource representation for a session template.
    /// </remarks>
    public Task<SessionTemplate> DataprocProjectsLocationsSessionTemplatesGet(DataprocProjectsLocationsSessionTemplatesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionTemplatesId", request.SessionTemplatesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SessionTemplate>(),
            DataprocProjectsLocationsSessionTemplatesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List sessionTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSessionTemplatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionTemplatesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists session templates.
    /// </remarks>
    public Task<ListSessionTemplatesResponse> DataprocProjectsLocationsSessionTemplatesList(DataprocProjectsLocationsSessionTemplatesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListSessionTemplatesResponse>(),
            DataprocProjectsLocationsSessionTemplatesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch sessionTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SessionTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionTemplatesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the session template synchronously.
    /// </remarks>
    public Task<SessionTemplate> DataprocProjectsLocationsSessionTemplatesPatch(DataprocProjectsLocationsSessionTemplatesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/sessionTemplates/{sessionTemplatesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionTemplatesId", request.SessionTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SessionTemplate>(),
            DataprocProjectsLocationsSessionTemplatesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create sessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an interactive session asynchronously.
    /// </remarks>
    public Task<Operation> DataprocProjectsLocationsSessionsCreate(DataprocProjectsLocationsSessionsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/sessions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("requestId", request.RequestId), new Param("sessionId", request.SessionId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsLocationsSessionsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete sessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the interactive session resource. If the session is not in terminal state, it is terminated, and then deleted.
    /// </remarks>
    public Task<Operation> DataprocProjectsLocationsSessionsDelete(DataprocProjectsLocationsSessionsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
            ],
            [new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            DataprocProjectsLocationsSessionsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get sessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Session"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the resource representation for an interactive session.
    /// </remarks>
    public Task<Session> DataprocProjectsLocationsSessionsGet(DataprocProjectsLocationsSessionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Session>(),
            DataprocProjectsLocationsSessionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List sessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSessionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists interactive sessions.
    /// </remarks>
    public Task<ListSessionsResponse> DataprocProjectsLocationsSessionsList(DataprocProjectsLocationsSessionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/sessions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListSessionsResponse>(),
            DataprocProjectsLocationsSessionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSessionSparkApplicationResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsAccessError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain high level information corresponding to a single Spark Application.
    /// </remarks>
    public Task<AccessSessionSparkApplicationResponse> DataprocProjectsLocationsSessionsSparkApplicationsAccess(DataprocProjectsLocationsSessionsSparkApplicationsAccessRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:access"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSessionSparkApplicationResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsAccessError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access environment info sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSessionSparkApplicationEnvironmentInfoResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain environment details for a Spark Application
    /// </remarks>
    public Task<AccessSessionSparkApplicationEnvironmentInfoResponse> DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfo(DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessEnvironmentInfo"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSessionSparkApplicationEnvironmentInfoResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsAccessEnvironmentInfoError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access job sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSessionSparkApplicationJobResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to a spark job for a Spark Application.
    /// </remarks>
    public Task<AccessSessionSparkApplicationJobResponse> DataprocProjectsLocationsSessionsSparkApplicationsAccessJob(DataprocProjectsLocationsSessionsSparkApplicationsAccessJobRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessJob"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("jobId", request.JobId), new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSessionSparkApplicationJobResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsAccessJobError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access native build info sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSessionSparkApplicationNativeBuildInfoResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to Native Build Information for a Spark Application.
    /// </remarks>
    public Task<AccessSessionSparkApplicationNativeBuildInfoResponse> DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfo(DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessNativeBuildInfo"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSessionSparkApplicationNativeBuildInfoResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeBuildInfoError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access native sql query sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSessionSparkApplicationNativeSqlQueryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to a particular Native SQL Query for a Spark Application.
    /// </remarks>
    public Task<AccessSessionSparkApplicationNativeSqlQueryResponse> DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQuery(DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessNativeSqlQuery"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("executionId", request.ExecutionId), new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSessionSparkApplicationNativeSqlQueryResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsAccessNativeSqlQueryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access sql plan sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSessionSparkApplicationSqlSparkPlanGraphResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain Spark Plan Graph for a Spark Application SQL execution. Limits the number of clusters returned as part of the graph to 10000.
    /// </remarks>
    public Task<AccessSessionSparkApplicationSqlSparkPlanGraphResponse> DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlan(DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessSqlPlan"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("executionId", request.ExecutionId), new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSessionSparkApplicationSqlSparkPlanGraphResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlPlanError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access sql query sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSessionSparkApplicationSqlQueryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to a particular SQL Query for a Spark Application.
    /// </remarks>
    public Task<AccessSessionSparkApplicationSqlQueryResponse> DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQuery(DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessSqlQuery"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("details", request.Details),
                new Param("executionId", request.ExecutionId),
                new Param("parent", request.Parent),
                new Param("planDescription", request.PlanDescription),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSessionSparkApplicationSqlQueryResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsAccessSqlQueryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access stage attempt sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSessionSparkApplicationStageAttemptResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to a spark stage attempt for a Spark Application.
    /// </remarks>
    public Task<AccessSessionSparkApplicationStageAttemptResponse> DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttempt(DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessStageAttempt"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("parent", request.Parent),
                new Param("stageAttemptId", request.StageAttemptId),
                new Param("stageId", request.StageId),
                new Param("summaryMetricsMask", request.SummaryMetricsMask),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSessionSparkApplicationStageAttemptResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsAccessStageAttemptError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Access stage rdd graph sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AccessSessionSparkApplicationStageRddOperationGraphResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain RDD operation graph for a Spark Application Stage. Limits the number of clusters returned as part of the graph to 10000.
    /// </remarks>
    public Task<AccessSessionSparkApplicationStageRddOperationGraphResponse> DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraph(DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:accessStageRddGraph"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent), new Param("stageId", request.StageId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AccessSessionSparkApplicationStageRddOperationGraphResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsAccessStageRddGraphError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSessionSparkApplicationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain high level information and list of Spark Applications corresponding to a batch
    /// </remarks>
    public Task<SearchSessionSparkApplicationsResponse> DataprocProjectsLocationsSessionsSparkApplicationsSearch(DataprocProjectsLocationsSessionsSparkApplicationsSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications:search"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
            ],
            [
                new Param("applicationStatus", request.ApplicationStatus),
                new Param("maxEndTime", request.MaxEndTime),
                new Param("maxTime", request.MaxTime),
                new Param("minEndTime", request.MinEndTime),
                new Param("minTime", request.MinTime),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSessionSparkApplicationsResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSearchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search executor stage summary sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSessionSparkApplicationExecutorStageSummaryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain executor summary with respect to a spark stage attempt.
    /// </remarks>
    public Task<SearchSessionSparkApplicationExecutorStageSummaryResponse> DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummary(DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchExecutorStageSummary"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
                new Param("stageAttemptId", request.StageAttemptId),
                new Param("stageId", request.StageId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSessionSparkApplicationExecutorStageSummaryResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorStageSummaryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search executors sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSessionSparkApplicationExecutorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to executors for a Spark Application.
    /// </remarks>
    public Task<SearchSessionSparkApplicationExecutorsResponse> DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutors(DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchExecutors"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("executorStatus", request.ExecutorStatus),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSessionSparkApplicationExecutorsResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSearchExecutorsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search jobs sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSessionSparkApplicationJobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain list of spark jobs corresponding to a Spark Application.
    /// </remarks>
    public Task<SearchSessionSparkApplicationJobsResponse> DataprocProjectsLocationsSessionsSparkApplicationsSearchJobs(DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchJobs"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("jobIds", request.JobIds),
                new Param("jobStatus", request.JobStatus),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSessionSparkApplicationJobsResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSearchJobsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search native sql queries sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSessionSparkApplicationNativeSqlQueriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to Native SQL Queries for a Spark Application.
    /// </remarks>
    public Task<SearchSessionSparkApplicationNativeSqlQueriesResponse> DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueries(DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchNativeSqlQueries"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSessionSparkApplicationNativeSqlQueriesResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSearchNativeSqlQueriesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search sql queries sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSessionSparkApplicationSqlQueriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to SQL Queries for a Spark Application.
    /// </remarks>
    public Task<SearchSessionSparkApplicationSqlQueriesResponse> DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueries(DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchSqlQueries"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("details", request.Details),
                new Param("operationIds", request.OperationIds),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
                new Param("planDescription", request.PlanDescription),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSessionSparkApplicationSqlQueriesResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSearchSqlQueriesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search stage attempt tasks sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSessionSparkApplicationStageAttemptTasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to tasks for a spark stage attempt for a Spark Application.
    /// </remarks>
    public Task<SearchSessionSparkApplicationStageAttemptTasksResponse> DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasks(DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStageAttemptTasks"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
                new Param("sortRuntime", request.SortRuntime),
                new Param("stageAttemptId", request.StageAttemptId),
                new Param("stageId", request.StageId),
                new Param("taskStatus", request.TaskStatus),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSessionSparkApplicationStageAttemptTasksResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptTasksError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search stage attempts sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSessionSparkApplicationStageAttemptsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to a spark stage attempts for a Spark Application.
    /// </remarks>
    public Task<SearchSessionSparkApplicationStageAttemptsResponse> DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttempts(DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStageAttempts"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
                new Param("stageId", request.StageId),
                new Param("summaryMetricsMask", request.SummaryMetricsMask),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSessionSparkApplicationStageAttemptsResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSearchStageAttemptsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search stages sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchSessionSparkApplicationStagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain data corresponding to stages for a Spark Application.
    /// </remarks>
    public Task<SearchSessionSparkApplicationStagesResponse> DataprocProjectsLocationsSessionsSparkApplicationsSearchStages(DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:searchStages"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("parent", request.Parent),
                new Param("stageIds", request.StageIds),
                new Param("stageStatus", request.StageStatus),
                new Param("summaryMetricsMask", request.SummaryMetricsMask),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchSessionSparkApplicationStagesResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSearchStagesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarize executors sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummarizeSessionSparkApplicationExecutorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain summary of Executor Summary for a Spark Application
    /// </remarks>
    public Task<SummarizeSessionSparkApplicationExecutorsResponse> DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutors(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeExecutors"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SummarizeSessionSparkApplicationExecutorsResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSummarizeExecutorsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarize jobs sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummarizeSessionSparkApplicationJobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain summary of Jobs for a Spark Application
    /// </remarks>
    public Task<SummarizeSessionSparkApplicationJobsResponse> DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobs(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeJobs"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("jobIds", request.JobIds), new Param("parent", request.Parent)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SummarizeSessionSparkApplicationJobsResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSummarizeJobsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarize stage attempt tasks sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummarizeSessionSparkApplicationStageAttemptTasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain summary of Tasks for a Spark Application Stage Attempt
    /// </remarks>
    public Task<SummarizeSessionSparkApplicationStageAttemptTasksResponse> DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasks(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeStageAttemptTasks"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [
                new Param("parent", request.Parent),
                new Param("stageAttemptId", request.StageAttemptId),
                new Param("stageId", request.StageId),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SummarizeSessionSparkApplicationStageAttemptTasksResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStageAttemptTasksError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Summarize stages sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SummarizeSessionSparkApplicationStagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Obtain summary of Stages for a Spark Application
    /// </remarks>
    public Task<SummarizeSessionSparkApplicationStagesResponse> DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStages(DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:summarizeStages"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [new Param("parent", request.Parent), new Param("stageIds", request.StageIds)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SummarizeSessionSparkApplicationStagesResponse>(),
            DataprocProjectsLocationsSessionsSparkApplicationsSummarizeStagesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Write sparkApplications
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsSparkApplicationsWriteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Write wrapper objects from dataplane to spanner
    /// </remarks>
    public Task<object> DataprocProjectsLocationsSessionsSparkApplicationsWrite(DataprocProjectsLocationsSessionsSparkApplicationsWriteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}/sparkApplications/{sparkApplicationsId}:write"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
                new TemplateParam("sparkApplicationsId", request.SparkApplicationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            DataprocProjectsLocationsSessionsSparkApplicationsWriteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Terminate sessions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsSessionsTerminateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Terminates the interactive session.
    /// </remarks>
    public Task<Operation> DataprocProjectsLocationsSessionsTerminate(DataprocProjectsLocationsSessionsTerminateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/sessions/{sessionsId}:terminate"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("sessionsId", request.SessionsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsLocationsSessionsTerminateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkflowTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsWorkflowTemplatesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates new workflow template.
    /// </remarks>
    public Task<WorkflowTemplate> DataprocProjectsLocationsWorkflowTemplatesCreate(DataprocProjectsLocationsWorkflowTemplatesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WorkflowTemplate>(),
            DataprocProjectsLocationsWorkflowTemplatesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsWorkflowTemplatesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a workflow template. It does not cancel in-progress workflows.
    /// </remarks>
    public Task<object> DataprocProjectsLocationsWorkflowTemplatesDelete(DataprocProjectsLocationsWorkflowTemplatesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [new Param("version", request.Version)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DataprocProjectsLocationsWorkflowTemplatesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkflowTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsWorkflowTemplatesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
    /// </remarks>
    public Task<WorkflowTemplate> DataprocProjectsLocationsWorkflowTemplatesGet(DataprocProjectsLocationsWorkflowTemplatesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [new Param("version", request.Version)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkflowTemplate>(),
            DataprocProjectsLocationsWorkflowTemplatesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> DataprocProjectsLocationsWorkflowTemplatesGetIamPolicy(DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsLocationsWorkflowTemplatesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instantiate workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsWorkflowTemplatesInstantiateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
    /// </remarks>
    public Task<Operation> DataprocProjectsLocationsWorkflowTemplatesInstantiate(DataprocProjectsLocationsWorkflowTemplatesInstantiateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:instantiate"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsLocationsWorkflowTemplatesInstantiateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instantiate inline workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
    /// </remarks>
    public Task<Operation> DataprocProjectsLocationsWorkflowTemplatesInstantiateInline(DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates:instantiateInline"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsLocationsWorkflowTemplatesInstantiateInlineError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListWorkflowTemplatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsWorkflowTemplatesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists workflows that match the specified filter in the request.
    /// </remarks>
    public Task<ListWorkflowTemplatesResponse> DataprocProjectsLocationsWorkflowTemplatesList(DataprocProjectsLocationsWorkflowTemplatesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListWorkflowTemplatesResponse>(),
            DataprocProjectsLocationsWorkflowTemplatesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy> DataprocProjectsLocationsWorkflowTemplatesSetIamPolicy(DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsLocationsWorkflowTemplatesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> DataprocProjectsLocationsWorkflowTemplatesTestIamPermissions(DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            DataprocProjectsLocationsWorkflowTemplatesTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkflowTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsLocationsWorkflowTemplatesUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
    /// </remarks>
    public Task<WorkflowTemplate> DataprocProjectsLocationsWorkflowTemplatesUpdate(DataprocProjectsLocationsWorkflowTemplatesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/workflowTemplates/{workflowTemplatesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WorkflowTemplate>(),
            DataprocProjectsLocationsWorkflowTemplatesUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutoscalingPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsAutoscalingPoliciesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates new autoscaling policy.
    /// </remarks>
    public Task<AutoscalingPolicy> DataprocProjectsRegionsAutoscalingPoliciesCreate(DataprocProjectsRegionsAutoscalingPoliciesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("regionsId", request.RegionsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AutoscalingPolicy>(),
            DataprocProjectsRegionsAutoscalingPoliciesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsAutoscalingPoliciesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes an autoscaling policy. It is an error to delete an autoscaling policy that is in use by one or more clusters.
    /// </remarks>
    public Task<object> DataprocProjectsRegionsAutoscalingPoliciesDelete(DataprocProjectsRegionsAutoscalingPoliciesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DataprocProjectsRegionsAutoscalingPoliciesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutoscalingPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsAutoscalingPoliciesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves autoscaling policy.
    /// </remarks>
    public Task<AutoscalingPolicy> DataprocProjectsRegionsAutoscalingPoliciesGet(DataprocProjectsRegionsAutoscalingPoliciesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AutoscalingPolicy>(),
            DataprocProjectsRegionsAutoscalingPoliciesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicy(DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsRegionsAutoscalingPoliciesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAutoscalingPoliciesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsAutoscalingPoliciesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists autoscaling policies in the project.
    /// </remarks>
    public Task<ListAutoscalingPoliciesResponse> DataprocProjectsRegionsAutoscalingPoliciesList(DataprocProjectsRegionsAutoscalingPoliciesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("regionsId", request.RegionsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListAutoscalingPoliciesResponse>(),
            DataprocProjectsRegionsAutoscalingPoliciesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy> DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicy(DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsRegionsAutoscalingPoliciesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissions(DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            DataprocProjectsRegionsAutoscalingPoliciesTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update autoscalingPolicies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutoscalingPolicy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsAutoscalingPoliciesUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates (replaces) autoscaling policy.Disabled check for update_mask, because all updates will be full replacements.
    /// </remarks>
    public Task<AutoscalingPolicy> DataprocProjectsRegionsAutoscalingPoliciesUpdate(DataprocProjectsRegionsAutoscalingPoliciesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/autoscalingPolicies/{autoscalingPoliciesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("autoscalingPoliciesId", request.AutoscalingPoliciesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AutoscalingPolicy>(),
            DataprocProjectsRegionsAutoscalingPoliciesUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsClustersCreate(DataprocProjectsRegionsClustersCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/clusters"),
            [new TemplateParam("projectId", request.ProjectId), new TemplateParam("region", request.Region)],
            [
                new Param("actionOnFailedPrimaryWorkers", request.ActionOnFailedPrimaryWorkers),
                new Param("requestId", request.RequestId),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsClustersCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata).
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsClustersDelete(DataprocProjectsRegionsClustersDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}"),
            [
                new TemplateParam("projectId", request.ProjectId),
                new TemplateParam("region", request.Region),
                new TemplateParam("clusterName", request.ClusterName),
            ],
            [
                new Param("clusterUuid", request.ClusterUuid),
                new Param("gracefulTerminationTimeout", request.GracefulTerminationTimeout),
                new Param("requestId", request.RequestId),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsClustersDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Diagnose clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersDiagnoseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets cluster diagnostic information. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). After the operation completes, Operation.response contains DiagnoseClusterResults (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#diagnoseclusterresults).
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsClustersDiagnose(DataprocProjectsRegionsClustersDiagnoseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:diagnose"),
            [
                new TemplateParam("projectId", request.ProjectId),
                new TemplateParam("region", request.Region),
                new TemplateParam("clusterName", request.ClusterName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsClustersDiagnoseError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Cluster"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the resource representation for a cluster in a project.
    /// </remarks>
    public Task<Cluster> DataprocProjectsRegionsClustersGet(DataprocProjectsRegionsClustersGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}"),
            [
                new TemplateParam("projectId", request.ProjectId),
                new TemplateParam("region", request.Region),
                new TemplateParam("clusterName", request.ClusterName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Cluster>(),
            DataprocProjectsRegionsClustersGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> DataprocProjectsRegionsClustersGetIamPolicy(DataprocProjectsRegionsClustersGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("clustersId", request.ClustersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsRegionsClustersGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Inject credentials clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersInjectCredentialsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Inject encrypted credentials into all of the VMs in a cluster.The target cluster must be a personal auth cluster assigned to the user who is issuing the RPC.
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsClustersInjectCredentials(DataprocProjectsRegionsClustersInjectCredentialsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:injectCredentials"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("clustersId", request.ClustersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsClustersInjectCredentialsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListClustersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all regions/{region}/clusters in a project alphabetically.
    /// </remarks>
    public Task<ListClustersResponse> DataprocProjectsRegionsClustersList(DataprocProjectsRegionsClustersListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/clusters"),
            [new TemplateParam("projectId", request.ProjectId), new TemplateParam("region", request.Region)],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListClustersResponse>(),
            DataprocProjectsRegionsClustersListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create nodeGroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersNodeGroupsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsClustersNodeGroupsCreate(DataprocProjectsRegionsClustersNodeGroupsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("clustersId", request.ClustersId),
            ],
            [
                new Param("nodeGroupId", request.NodeGroupId),
                new Param("parentOperationId", request.ParentOperationId),
                new Param("requestId", request.RequestId),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsClustersNodeGroupsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get nodeGroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NodeGroup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersNodeGroupsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the resource representation for a node group in a cluster.
    /// </remarks>
    public Task<NodeGroup> DataprocProjectsRegionsClustersNodeGroupsGet(DataprocProjectsRegionsClustersNodeGroupsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("clustersId", request.ClustersId),
                new TemplateParam("nodeGroupsId", request.NodeGroupsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NodeGroup>(),
            DataprocProjectsRegionsClustersNodeGroupsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Repair nodeGroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersNodeGroupsRepairError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Repair nodes in a node group.
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsClustersNodeGroupsRepair(DataprocProjectsRegionsClustersNodeGroupsRepairRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}:repair"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("clustersId", request.ClustersId),
                new TemplateParam("nodeGroupsId", request.NodeGroupsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsClustersNodeGroupsRepairError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resize nodeGroups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersNodeGroupsResizeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resizes a node group in a cluster. The returned Operation.metadata is NodeGroupOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#nodegroupoperationmetadata).
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsClustersNodeGroupsResize(DataprocProjectsRegionsClustersNodeGroupsResizeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}/nodeGroups/{nodeGroupsId}:resize"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("clustersId", request.ClustersId),
                new TemplateParam("nodeGroupsId", request.NodeGroupsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsClustersNodeGroupsResizeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a cluster in a project. The returned Operation.metadata will be ClusterOperationMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#clusteroperationmetadata). The cluster must be in a RUNNING state or an error is returned.
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsClustersPatch(DataprocProjectsRegionsClustersPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}"),
            [
                new TemplateParam("projectId", request.ProjectId),
                new TemplateParam("region", request.Region),
                new TemplateParam("clusterName", request.ClusterName),
            ],
            [
                new Param("gracefulDecommissionTimeout", request.GracefulDecommissionTimeout),
                new Param("requestId", request.RequestId),
                new Param("updateMask", request.UpdateMask),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsClustersPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Repair clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersRepairError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Repairs a cluster.
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsClustersRepair(DataprocProjectsRegionsClustersRepairRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:repair"),
            [
                new TemplateParam("projectId", request.ProjectId),
                new TemplateParam("region", request.Region),
                new TemplateParam("clusterName", request.ClusterName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsClustersRepairError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy> DataprocProjectsRegionsClustersSetIamPolicy(DataprocProjectsRegionsClustersSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("clustersId", request.ClustersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsRegionsClustersSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersStartError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a cluster in a project.
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsClustersStart(DataprocProjectsRegionsClustersStartRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:start"),
            [
                new TemplateParam("projectId", request.ProjectId),
                new TemplateParam("region", request.Region),
                new TemplateParam("clusterName", request.ClusterName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsClustersStartError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Stop clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersStopError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Stops a cluster in a project.
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsClustersStop(DataprocProjectsRegionsClustersStopRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/clusters/{clusterName}:stop"),
            [
                new TemplateParam("projectId", request.ProjectId),
                new TemplateParam("region", request.Region),
                new TemplateParam("clusterName", request.ClusterName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsClustersStopError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions clusters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsClustersTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> DataprocProjectsRegionsClustersTestIamPermissions(DataprocProjectsRegionsClustersTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/clusters/{clustersId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("clustersId", request.ClustersId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            DataprocProjectsRegionsClustersTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Job"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsJobsCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a job cancellation request. To access the job resource after cancellation, call regions/{region}/jobs.list (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/list) or regions/{region}/jobs.get (https://cloud.google.com/dataproc/docs/reference/rest/v1/projects.regions.jobs/get).
    /// </remarks>
    public Task<Job> DataprocProjectsRegionsJobsCancel(DataprocProjectsRegionsJobsCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/jobs/{jobId}:cancel"),
            [
                new TemplateParam("projectId", request.ProjectId),
                new TemplateParam("region", request.Region),
                new TemplateParam("jobId", request.JobId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Job>(),
            DataprocProjectsRegionsJobsCancelError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsJobsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the job from the project. If the job is active, the delete fails, and the response returns FAILED_PRECONDITION.
    /// </remarks>
    public Task<object> DataprocProjectsRegionsJobsDelete(DataprocProjectsRegionsJobsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/jobs/{jobId}"),
            [
                new TemplateParam("projectId", request.ProjectId),
                new TemplateParam("region", request.Region),
                new TemplateParam("jobId", request.JobId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DataprocProjectsRegionsJobsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Job"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsJobsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the resource representation for a job in a project.
    /// </remarks>
    public Task<Job> DataprocProjectsRegionsJobsGet(DataprocProjectsRegionsJobsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/jobs/{jobId}"),
            [
                new TemplateParam("projectId", request.ProjectId),
                new TemplateParam("region", request.Region),
                new TemplateParam("jobId", request.JobId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Job>(),
            DataprocProjectsRegionsJobsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsJobsGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> DataprocProjectsRegionsJobsGetIamPolicy(DataprocProjectsRegionsJobsGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("jobsId", request.JobsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsRegionsJobsGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListJobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsJobsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists regions/{region}/jobs in a project.
    /// </remarks>
    public Task<ListJobsResponse> DataprocProjectsRegionsJobsList(DataprocProjectsRegionsJobsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/jobs"),
            [new TemplateParam("projectId", request.ProjectId), new TemplateParam("region", request.Region)],
            [
                new Param("clusterName", request.ClusterName),
                new Param("filter", request.Filter),
                new Param("jobStateMatcher", request.JobStateMatcher),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListJobsResponse>(),
            DataprocProjectsRegionsJobsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Job"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsJobsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a job in a project.
    /// </remarks>
    public Task<Job> DataprocProjectsRegionsJobsPatch(DataprocProjectsRegionsJobsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/jobs/{jobId}"),
            [
                new TemplateParam("projectId", request.ProjectId),
                new TemplateParam("region", request.Region),
                new TemplateParam("jobId", request.JobId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Job>(),
            DataprocProjectsRegionsJobsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsJobsSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy> DataprocProjectsRegionsJobsSetIamPolicy(DataprocProjectsRegionsJobsSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("jobsId", request.JobsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsRegionsJobsSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Submit jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Job"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsJobsSubmitError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits a job to a cluster.
    /// </remarks>
    public Task<Job> DataprocProjectsRegionsJobsSubmit(DataprocProjectsRegionsJobsSubmitRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/jobs:submit"),
            [new TemplateParam("projectId", request.ProjectId), new TemplateParam("region", request.Region)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Job>(),
            DataprocProjectsRegionsJobsSubmitError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Submit as operation jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsJobsSubmitAsOperationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submits job to a cluster.
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsJobsSubmitAsOperation(DataprocProjectsRegionsJobsSubmitAsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectId}/regions/{region}/jobs:submitAsOperation"),
            [new TemplateParam("projectId", request.ProjectId), new TemplateParam("region", request.Region)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsJobsSubmitAsOperationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsJobsTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> DataprocProjectsRegionsJobsTestIamPermissions(DataprocProjectsRegionsJobsTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/jobs/{jobsId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("jobsId", request.JobsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            DataprocProjectsRegionsJobsTestIamPermissionsError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsOperationsCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
    /// </remarks>
    public Task<object> DataprocProjectsRegionsOperationsCancel(DataprocProjectsRegionsOperationsCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:cancel"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DataprocProjectsRegionsOperationsCancelError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsOperationsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED.
    /// </remarks>
    public Task<object> DataprocProjectsRegionsOperationsDelete(DataprocProjectsRegionsOperationsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DataprocProjectsRegionsOperationsDeleteError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsOperationsGet(DataprocProjectsRegionsOperationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsOperationsGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> DataprocProjectsRegionsOperationsGetIamPolicy(DataprocProjectsRegionsOperationsGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsRegionsOperationsGetIamPolicyError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.
    /// </remarks>
    public Task<ListOperationsResponse> DataprocProjectsRegionsOperationsList(DataprocProjectsRegionsOperationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/operations"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("regionsId", request.RegionsId)],
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
            DataprocProjectsRegionsOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsOperationsSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy> DataprocProjectsRegionsOperationsSetIamPolicy(DataprocProjectsRegionsOperationsSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsRegionsOperationsSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsOperationsTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> DataprocProjectsRegionsOperationsTestIamPermissions(DataprocProjectsRegionsOperationsTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/operations/{operationsId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            DataprocProjectsRegionsOperationsTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkflowTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsWorkflowTemplatesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates new workflow template.
    /// </remarks>
    public Task<WorkflowTemplate> DataprocProjectsRegionsWorkflowTemplatesCreate(DataprocProjectsRegionsWorkflowTemplatesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("regionsId", request.RegionsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WorkflowTemplate>(),
            DataprocProjectsRegionsWorkflowTemplatesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsWorkflowTemplatesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a workflow template. It does not cancel in-progress workflows.
    /// </remarks>
    public Task<object> DataprocProjectsRegionsWorkflowTemplatesDelete(DataprocProjectsRegionsWorkflowTemplatesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [new Param("version", request.Version)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            DataprocProjectsRegionsWorkflowTemplatesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkflowTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsWorkflowTemplatesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the latest workflow template.Can retrieve previously instantiated template by specifying optional version parameter.
    /// </remarks>
    public Task<WorkflowTemplate> DataprocProjectsRegionsWorkflowTemplatesGet(DataprocProjectsRegionsWorkflowTemplatesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [new Param("version", request.Version)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WorkflowTemplate>(),
            DataprocProjectsRegionsWorkflowTemplatesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy> DataprocProjectsRegionsWorkflowTemplatesGetIamPolicy(DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsRegionsWorkflowTemplatesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instantiate workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsWorkflowTemplatesInstantiateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Instantiates a template and begins execution.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsWorkflowTemplatesInstantiate(DataprocProjectsRegionsWorkflowTemplatesInstantiateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:instantiate"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsWorkflowTemplatesInstantiateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Instantiate inline workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Instantiates a template and begins execution.This method is equivalent to executing the sequence CreateWorkflowTemplate, InstantiateWorkflowTemplate, DeleteWorkflowTemplate.The returned Operation can be used to track execution of workflow by polling operations.get. The Operation will complete when entire workflow is finished.The running workflow can be aborted via operations.cancel. This will cause any inflight jobs to be cancelled and workflow-owned clusters to be deleted.The Operation.metadata will be WorkflowMetadata (https://cloud.google.com/dataproc/docs/reference/rpc/google.cloud.dataproc.v1#workflowmetadata). Also see Using WorkflowMetadata (https://cloud.google.com/dataproc/docs/concepts/workflows/debugging#using_workflowmetadata).On successful completion, Operation.response will be Empty.
    /// </remarks>
    public Task<Operation> DataprocProjectsRegionsWorkflowTemplatesInstantiateInline(DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates:instantiateInline"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("regionsId", request.RegionsId)],
            [new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            DataprocProjectsRegionsWorkflowTemplatesInstantiateInlineError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListWorkflowTemplatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsWorkflowTemplatesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists workflows that match the specified filter in the request.
    /// </remarks>
    public Task<ListWorkflowTemplatesResponse> DataprocProjectsRegionsWorkflowTemplatesList(DataprocProjectsRegionsWorkflowTemplatesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("regionsId", request.RegionsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListWorkflowTemplatesResponse>(),
            DataprocProjectsRegionsWorkflowTemplatesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy> DataprocProjectsRegionsWorkflowTemplatesSetIamPolicy(DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            DataprocProjectsRegionsWorkflowTemplatesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> DataprocProjectsRegionsWorkflowTemplatesTestIamPermissions(DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            DataprocProjectsRegionsWorkflowTemplatesTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update workflowTemplates
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WorkflowTemplate"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DataprocProjectsRegionsWorkflowTemplatesUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates (replaces) workflow template. The updated template must contain version that matches the current server version.
    /// </remarks>
    public Task<WorkflowTemplate> DataprocProjectsRegionsWorkflowTemplatesUpdate(DataprocProjectsRegionsWorkflowTemplatesUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/regions/{regionsId}/workflowTemplates/{workflowTemplatesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("regionsId", request.RegionsId),
                new TemplateParam("workflowTemplatesId", request.WorkflowTemplatesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<WorkflowTemplate>(),
            DataprocProjectsRegionsWorkflowTemplatesUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create federations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsFederationsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a metastore federation in a project and location.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsFederationsCreate(MetastoreProjectsLocationsFederationsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/federations"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("federationId", request.FederationId), new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsFederationsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete federations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsFederationsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single federation.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsFederationsDelete(MetastoreProjectsLocationsFederationsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("federationsId", request.FederationsId),
            ],
            [new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsFederationsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get federations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Federation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsFederationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the details of a single federation.
    /// </remarks>
    public Task<Federation> MetastoreProjectsLocationsFederationsGet(MetastoreProjectsLocationsFederationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("federationsId", request.FederationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Federation>(),
            MetastoreProjectsLocationsFederationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy federations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsFederationsGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy2> MetastoreProjectsLocationsFederationsGetIamPolicy(MetastoreProjectsLocationsFederationsGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("federationsId", request.FederationsId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy2>(),
            MetastoreProjectsLocationsFederationsGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List federations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListFederationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsFederationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists federations in a project and location.
    /// </remarks>
    public Task<ListFederationsResponse> MetastoreProjectsLocationsFederationsList(MetastoreProjectsLocationsFederationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/federations"),
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
            JsonResponse.Create<ListFederationsResponse>(),
            MetastoreProjectsLocationsFederationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch federations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsFederationsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the fields of a federation.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsFederationsPatch(MetastoreProjectsLocationsFederationsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("federationsId", request.FederationsId),
            ],
            [new Param("requestId", request.RequestId), new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsFederationsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy federations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsFederationsSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy2> MetastoreProjectsLocationsFederationsSetIamPolicy(MetastoreProjectsLocationsFederationsSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("federationsId", request.FederationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy2>(),
            MetastoreProjectsLocationsFederationsSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions federations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsFederationsTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> MetastoreProjectsLocationsFederationsTestIamPermissions(MetastoreProjectsLocationsFederationsTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/federations/{federationsId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("federationsId", request.FederationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            MetastoreProjectsLocationsFederationsTestIamPermissionsError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about a location.
    /// </remarks>
    public Task<Location> MetastoreProjectsLocationsGet(MetastoreProjectsLocationsGetRequest request,
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
            MetastoreProjectsLocationsGetError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists information about the supported locations for this service.This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: Global locations: If name is empty, the method lists the public locations available to all projects. Project-specific locations: If name follows the format projects/{project}, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project.For gRPC and client library implementations, the resource name is passed as the name field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
    /// </remarks>
    public Task<ListLocationsResponse> MetastoreProjectsLocationsList(MetastoreProjectsLocationsListRequest request,
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
            MetastoreProjectsLocationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Alter location services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesAlterLocationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Alter metadata resource location. The metadata resource can be a database, table, or partition. This functionality only updates the parent directory for the respective metadata resource and does not transfer any existing data to the new location.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesAlterLocation(MetastoreProjectsLocationsServicesAlterLocationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:alterLocation"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesAlterLocationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Alter table properties services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesAlterTablePropertiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Alter metadata table properties.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesAlterTableProperties(MetastoreProjectsLocationsServicesAlterTablePropertiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:alterTableProperties"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesAlterTablePropertiesError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create backups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesBackupsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new backup in a given project and location.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesBackupsCreate(MetastoreProjectsLocationsServicesBackupsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [new Param("backupId", request.BackupId), new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesBackupsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete backups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesBackupsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single backup.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesBackupsDelete(MetastoreProjectsLocationsServicesBackupsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("backupsId", request.BackupsId),
            ],
            [new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesBackupsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get backups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Backup"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesBackupsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details of a single backup.
    /// </remarks>
    public Task<Backup> MetastoreProjectsLocationsServicesBackupsGet(MetastoreProjectsLocationsServicesBackupsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("backupsId", request.BackupsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Backup>(),
            MetastoreProjectsLocationsServicesBackupsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy backups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesBackupsGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy2> MetastoreProjectsLocationsServicesBackupsGetIamPolicy(MetastoreProjectsLocationsServicesBackupsGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("backupsId", request.BackupsId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy2>(),
            MetastoreProjectsLocationsServicesBackupsGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List backups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListBackupsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesBackupsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists backups in a service.
    /// </remarks>
    public Task<ListBackupsResponse> MetastoreProjectsLocationsServicesBackupsList(MetastoreProjectsLocationsServicesBackupsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
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
            JsonResponse.Create<ListBackupsResponse>(),
            MetastoreProjectsLocationsServicesBackupsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy backups
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesBackupsSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy2> MetastoreProjectsLocationsServicesBackupsSetIamPolicy(MetastoreProjectsLocationsServicesBackupsSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/backups/{backupsId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("backupsId", request.BackupsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy2>(),
            MetastoreProjectsLocationsServicesBackupsSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Cancel migration services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesCancelMigrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels the ongoing Managed Migration process.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesCancelMigration(MetastoreProjectsLocationsServicesCancelMigrationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:cancelMigration"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesCancelMigrationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Complete migration services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesCompleteMigrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Completes the managed migration process. The Dataproc Metastore service will switch to using its own backend database after successful migration.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesCompleteMigration(MetastoreProjectsLocationsServicesCompleteMigrationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:completeMigration"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesCompleteMigrationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a metastore service in a project and location.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesCreate(MetastoreProjectsLocationsServicesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("requestId", request.RequestId), new Param("serviceId", request.ServiceId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy databases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy2> MetastoreProjectsLocationsServicesDatabasesGetIamPolicy(MetastoreProjectsLocationsServicesDatabasesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("databasesId", request.DatabasesId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy2>(),
            MetastoreProjectsLocationsServicesDatabasesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy databases
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy2> MetastoreProjectsLocationsServicesDatabasesSetIamPolicy(MetastoreProjectsLocationsServicesDatabasesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("databasesId", request.DatabasesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy2>(),
            MetastoreProjectsLocationsServicesDatabasesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy tables
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy2> MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicy(MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}/tables/{tablesId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("databasesId", request.DatabasesId),
                new TemplateParam("tablesId", request.TablesId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy2>(),
            MetastoreProjectsLocationsServicesDatabasesTablesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy tables
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy2> MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicy(MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/databases/{databasesId}/tables/{tablesId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("databasesId", request.DatabasesId),
                new TemplateParam("tablesId", request.TablesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy2>(),
            MetastoreProjectsLocationsServicesDatabasesTablesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single service.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesDelete(MetastoreProjectsLocationsServicesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Export metadata services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesExportMetadataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Exports metadata from a service.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesExportMetadata(MetastoreProjectsLocationsServicesExportMetadataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:exportMetadata"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesExportMetadataError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Service"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the details of a single service.
    /// </remarks>
    public Task<Service> MetastoreProjectsLocationsServicesGet(MetastoreProjectsLocationsServicesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Service>(),
            MetastoreProjectsLocationsServicesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    /// </remarks>
    public Task<Policy2> MetastoreProjectsLocationsServicesGetIamPolicy(MetastoreProjectsLocationsServicesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [new Param("options.requestedPolicyVersion", request.OptionsRequestedPolicyVersion)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Policy2>(),
            MetastoreProjectsLocationsServicesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListServicesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists services in a project and location.
    /// </remarks>
    public Task<ListServicesResponse> MetastoreProjectsLocationsServicesList(MetastoreProjectsLocationsServicesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services"),
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
            JsonResponse.Create<ListServicesResponse>(),
            MetastoreProjectsLocationsServicesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create metadataImports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesMetadataImportsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new MetadataImport in a given project and location.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesMetadataImportsCreate(MetastoreProjectsLocationsServicesMetadataImportsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [new Param("metadataImportId", request.MetadataImportId), new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesMetadataImportsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get metadataImports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MetadataImport"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesMetadataImportsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details of a single import.
    /// </remarks>
    public Task<MetadataImport> MetastoreProjectsLocationsServicesMetadataImportsGet(MetastoreProjectsLocationsServicesMetadataImportsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports/{metadataImportsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("metadataImportsId", request.MetadataImportsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MetadataImport>(),
            MetastoreProjectsLocationsServicesMetadataImportsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List metadataImports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListMetadataImportsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesMetadataImportsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists imports in a service.
    /// </remarks>
    public Task<ListMetadataImportsResponse> MetastoreProjectsLocationsServicesMetadataImportsList(MetastoreProjectsLocationsServicesMetadataImportsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
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
            JsonResponse.Create<ListMetadataImportsResponse>(),
            MetastoreProjectsLocationsServicesMetadataImportsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch metadataImports
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesMetadataImportsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a single import. Only the description field of MetadataImport is supported to be updated.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesMetadataImportsPatch(MetastoreProjectsLocationsServicesMetadataImportsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/metadataImports/{metadataImportsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("metadataImportsId", request.MetadataImportsId),
            ],
            [new Param("requestId", request.RequestId), new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesMetadataImportsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete migrationExecutions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a single migration execution.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesMigrationExecutionsDelete(MetastoreProjectsLocationsServicesMigrationExecutionsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions/{migrationExecutionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("migrationExecutionsId", request.MigrationExecutionsId),
            ],
            [new Param("requestId", request.RequestId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesMigrationExecutionsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get migrationExecutions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MigrationExecution"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesMigrationExecutionsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets details of a single migration execution.
    /// </remarks>
    public Task<MigrationExecution> MetastoreProjectsLocationsServicesMigrationExecutionsGet(MetastoreProjectsLocationsServicesMigrationExecutionsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions/{migrationExecutionsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
                new TemplateParam("migrationExecutionsId", request.MigrationExecutionsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MigrationExecution>(),
            MetastoreProjectsLocationsServicesMigrationExecutionsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List migrationExecutions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListMigrationExecutionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesMigrationExecutionsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists migration executions on a service.
    /// </remarks>
    public Task<ListMigrationExecutionsResponse> MetastoreProjectsLocationsServicesMigrationExecutionsList(MetastoreProjectsLocationsServicesMigrationExecutionsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}/migrationExecutions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
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
            JsonResponse.Create<ListMigrationExecutionsResponse>(),
            MetastoreProjectsLocationsServicesMigrationExecutionsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Move table to database services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesMoveTableToDatabaseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Move a table to another database.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesMoveTableToDatabase(MetastoreProjectsLocationsServicesMoveTableToDatabaseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:moveTableToDatabase"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesMoveTableToDatabaseError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the parameters of a single service.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesPatch(MetastoreProjectsLocationsServicesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [new Param("requestId", request.RequestId), new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Query metadata services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesQueryMetadataError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Query Dataproc Metastore metadata.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesQueryMetadata(MetastoreProjectsLocationsServicesQueryMetadataRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:queryMetadata"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesQueryMetadataError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Restore services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesRestoreError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Restores a service from a backup.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesRestore(MetastoreProjectsLocationsServicesRestoreRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:restore"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesRestoreError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy on the specified resource. Replaces any existing policy.Can return NOT_FOUND, INVALID_ARGUMENT, and PERMISSION_DENIED errors.
    /// </remarks>
    public Task<Policy2> MetastoreProjectsLocationsServicesSetIamPolicy(MetastoreProjectsLocationsServicesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy2>(),
            MetastoreProjectsLocationsServicesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start migration services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesStartMigrationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts the Managed Migration process.
    /// </remarks>
    public Task<Operation> MetastoreProjectsLocationsServicesStartMigration(MetastoreProjectsLocationsServicesStartMigrationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:startMigration"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            MetastoreProjectsLocationsServicesStartMigrationError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions services
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="MetastoreProjectsLocationsServicesTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error.Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> MetastoreProjectsLocationsServicesTestIamPermissions(MetastoreProjectsLocationsServicesTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v1/projects/{projectsId}/locations/{locationsId}/services/{servicesId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("servicesId", request.ServicesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            MetastoreProjectsLocationsServicesTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
