using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudTasks.Core;
using GoogleCloudTasks.Core.Authentication;
using GoogleCloudTasks.Core.Configuration;
using GoogleCloudTasks.Core.Exceptions;
using GoogleCloudTasks.Core.Logging;
using GoogleCloudTasks.Core.Models;
using GoogleCloudTasks.Core.Request;
using GoogleCloudTasks.Core.Response;
using GoogleCloudTasks.Errors;
using GoogleCloudTasks.Models;
using GoogleCloudTasks.Requests;

namespace GoogleCloudTasks;

/// <summary>
/// Generated from Google's published Discovery document for Cloud Tasks API (cloudtasks v2, revision 20261106). 24 operation(s).
/// </summary>
public sealed class GoogleCloudTasksClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleCloudTasksClient(HttpClient httpClient, GoogleCloudTasksClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleCloudTasksClient/v2 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v2"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_CLOUD_TASKS_LOG"),
            "GoogleCloudTasksClient",
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
    /// Get locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Location"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets information about a location.
    /// </remarks>
    public Task<Location> CloudtasksProjectsLocationsGet(CloudtasksProjectsLocationsGetRequest request,
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
            CloudtasksProjectsLocationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get cmek config locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CmekConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsGetCmekConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the CMEK config. Gets the Customer Managed Encryption Key configured with the Cloud Tasks location. By default there is no <c>kms_key</c> configured.
    /// </remarks>
    public Task<CmekConfig> CloudtasksProjectsLocationsGetCmekConfig(CloudtasksProjectsLocationsGetCmekConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/cmekConfig"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CmekConfig>(),
            CloudtasksProjectsLocationsGetCmekConfigError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field: * <b>Global locations</b>: If <c>name</c> is empty, the method lists the public locations available to all projects. * <b>Project-specific locations</b>: If <c>name</c> follows the format <c>projects/{project}</c>, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the <c>name</c> field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.
    /// </remarks>
    public Task<ListLocationsResponse> CloudtasksProjectsLocationsList(CloudtasksProjectsLocationsListRequest request,
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
            CloudtasksProjectsLocationsListError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<Operation> CloudtasksProjectsLocationsOperationsGet(CloudtasksProjectsLocationsOperationsGetRequest request,
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
            CloudtasksProjectsLocationsOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueueModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a queue. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine <c>queue.yaml</c> or <c>queue.xml</c> file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.
    /// </remarks>
    public Task<QueueModel> CloudtasksProjectsLocationsQueuesCreate(CloudtasksProjectsLocationsQueuesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QueueModel>(),
            CloudtasksProjectsLocationsQueuesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a queue. This command will delete the queue even if it has tasks in it. Note: If you delete a queue, you may be prevented from creating a new queue with the same name as the deleted queue for a tombstone window of up to 3 days. During this window, the CreateQueue operation may appear to recreate the queue, but this can be misleading. If you attempt to create a queue with the same name as one that is in the tombstone window, run GetQueue to confirm that the queue creation was successful. If GetQueue returns 200 response code, your queue was successfully created with the name of the previously deleted queue. Otherwise, your queue did not successfully recreate. WARNING: Using this method may have unintended side effects if you are using an App Engine <c>queue.yaml</c> or <c>queue.xml</c> file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.
    /// </remarks>
    public Task<object> CloudtasksProjectsLocationsQueuesDelete(CloudtasksProjectsLocationsQueuesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            CloudtasksProjectsLocationsQueuesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueueModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a queue.
    /// </remarks>
    public Task<QueueModel> CloudtasksProjectsLocationsQueuesGet(CloudtasksProjectsLocationsQueuesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<QueueModel>(),
            CloudtasksProjectsLocationsQueuesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get iam policy queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesGetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the access control policy for a Queue. Returns an empty policy if the resource exists and does not have a policy set. Authorization requires the following Google IAM permission on the specified resource parent: * <c>cloudtasks.queues.getIamPolicy</c>
    /// </remarks>
    public Task<Policy> CloudtasksProjectsLocationsQueuesGetIamPolicy(CloudtasksProjectsLocationsQueuesGetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:getIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            CloudtasksProjectsLocationsQueuesGetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListQueuesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists queues. Queues are returned in lexicographical order.
    /// </remarks>
    public Task<ListQueuesResponse> CloudtasksProjectsLocationsQueuesList(CloudtasksProjectsLocationsQueuesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues"),
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
            JsonResponse.Create<ListQueuesResponse>(),
            CloudtasksProjectsLocationsQueuesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueueModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a queue. This method creates the queue if it does not exist and updates the queue if it does exist. Queues created with this method allow tasks to live for a maximum of 31 days. After a task is 31 days old, the task will be deleted regardless of whether it was dispatched or not. WARNING: Using this method may have unintended side effects if you are using an App Engine <c>queue.yaml</c> or <c>queue.xml</c> file to manage your queues. Read Overview of Queue Management and queue.yaml before using this method.
    /// </remarks>
    public Task<QueueModel> CloudtasksProjectsLocationsQueuesPatch(CloudtasksProjectsLocationsQueuesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QueueModel>(),
            CloudtasksProjectsLocationsQueuesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Pause queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueueModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesPauseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pauses the queue. If a queue is paused then the system will stop dispatching tasks until the queue is resumed via ResumeQueue. Tasks can still be added when the queue is paused. A queue is paused if its state is PAUSED.
    /// </remarks>
    public Task<QueueModel> CloudtasksProjectsLocationsQueuesPause(CloudtasksProjectsLocationsQueuesPauseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:pause"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QueueModel>(),
            CloudtasksProjectsLocationsQueuesPauseError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Purge queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueueModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesPurgeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Purges a queue by deleting all of its tasks. All tasks created before this method is called are permanently deleted. Purge operations can take up to one minute to take effect. Tasks might be dispatched before the purge takes effect. A purge is irreversible.
    /// </remarks>
    public Task<QueueModel> CloudtasksProjectsLocationsQueuesPurge(CloudtasksProjectsLocationsQueuesPurgeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:purge"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QueueModel>(),
            CloudtasksProjectsLocationsQueuesPurgeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resume queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="QueueModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesResumeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resume a queue. This method resumes a queue after it has been PAUSED or DISABLED. The state of a queue is stored in the queue's state; after calling this method it will be set to RUNNING. WARNING: Resuming many high-QPS queues at the same time can lead to target overloading. If you are resuming high-QPS queues, follow the 500/50/5 pattern described in Managing Cloud Tasks Scaling Risks.
    /// </remarks>
    public Task<QueueModel> CloudtasksProjectsLocationsQueuesResume(CloudtasksProjectsLocationsQueuesResumeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:resume"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<QueueModel>(),
            CloudtasksProjectsLocationsQueuesResumeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Set iam policy queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Policy"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesSetIamPolicyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sets the access control policy for a Queue. Replaces any existing policy. Note: The Cloud Console does not check queue-level IAM permissions yet. Project-level permissions are required to use the Cloud Console. Authorization requires the following Google IAM permission on the specified resource parent: * <c>cloudtasks.queues.setIamPolicy</c>
    /// </remarks>
    public Task<Policy> CloudtasksProjectsLocationsQueuesSetIamPolicy(CloudtasksProjectsLocationsQueuesSetIamPolicyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:setIamPolicy"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Policy>(),
            CloudtasksProjectsLocationsQueuesSetIamPolicyError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch create tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesTasksBatchCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a batch of tasks and adds them to a queue. All tasks must be for the same queue. A maximum of 100 tasks can be created in a single batch.
    /// </remarks>
    public Task<Operation> CloudtasksProjectsLocationsQueuesTasksBatchCreate(CloudtasksProjectsLocationsQueuesTasksBatchCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks:batchCreate"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            CloudtasksProjectsLocationsQueuesTasksBatchCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch delete tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesTasksBatchDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a batch of tasks. This is a non-atomic operation: if deletion fails for some tasks, it can still succeed for others. The metadata field of google.longrunning.Operation contains details of failed deletions. A maximum of 1000 tasks can be deleted in a batch.
    /// </remarks>
    public Task<Operation> CloudtasksProjectsLocationsQueuesTasksBatchDelete(CloudtasksProjectsLocationsQueuesTasksBatchDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks:batchDelete"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            CloudtasksProjectsLocationsQueuesTasksBatchDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Buffer tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BufferTaskResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesTasksBufferError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates and buffers a new task without the need to explicitly define a Task message. The queue must have HTTP target. To create the task with a custom ID, use the following format and set TASK_ID to your desired ID: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks/TASK_ID:buffer To create the task with an automatically generated ID, use the following format: projects/PROJECT_ID/locations/LOCATION_ID/queues/QUEUE_ID/tasks:buffer.
    /// </remarks>
    public Task<BufferTaskResponse> CloudtasksProjectsLocationsQueuesTasksBuffer(CloudtasksProjectsLocationsQueuesTasksBufferRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{taskId}:buffer"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
                new TemplateParam("taskId", request.TaskId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BufferTaskResponse>(),
            CloudtasksProjectsLocationsQueuesTasksBufferError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesTasksCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a task and adds it to a queue. Tasks cannot be updated after creation; there is no UpdateTask command. * The maximum task size is 100KB.
    /// </remarks>
    public Task<TaskModel> CloudtasksProjectsLocationsQueuesTasksCreate(CloudtasksProjectsLocationsQueuesTasksCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TaskModel>(),
            CloudtasksProjectsLocationsQueuesTasksCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesTasksDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a task. A task can be deleted if it is scheduled or dispatched. A task cannot be deleted if it has executed successfully or permanently failed.
    /// </remarks>
    public Task<object> CloudtasksProjectsLocationsQueuesTasksDelete(CloudtasksProjectsLocationsQueuesTasksDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
                new TemplateParam("tasksId", request.TasksId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            CloudtasksProjectsLocationsQueuesTasksDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesTasksGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a task. After a task is successfully executed or has exhausted its retry attempts, the task is deleted. A <c>GetTask</c> request for a deleted task returns a <c>NOT_FOUND</c> error.
    /// </remarks>
    public Task<TaskModel> CloudtasksProjectsLocationsQueuesTasksGet(CloudtasksProjectsLocationsQueuesTasksGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
                new TemplateParam("tasksId", request.TasksId),
            ],
            [new Param("responseView", request.ResponseView)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TaskModel>(),
            CloudtasksProjectsLocationsQueuesTasksGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTasksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesTasksListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the tasks in a queue. By default, only the BASIC view is retrieved due to performance considerations; response_view controls the subset of information which is returned. The tasks may be returned in any order. The ordering may change at any time.
    /// </remarks>
    public Task<ListTasksResponse> CloudtasksProjectsLocationsQueuesTasksList(CloudtasksProjectsLocationsQueuesTasksListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("responseView", request.ResponseView),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListTasksResponse>(),
            CloudtasksProjectsLocationsQueuesTasksListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run tasks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TaskModel"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesTasksRunError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Forces a task to run now. When this method is called, Cloud Tasks will dispatch the task, even if the task is already running, the queue has reached its RateLimits or is PAUSED. This command is meant to be used for manual debugging. For example, RunTask can be used to retry a failed task after a fix has been made or to manually force a task to be dispatched now. If Cloud Tasks receives a successful response from the task's target, then the task will be deleted; otherwise the task's schedule_time will be reset to the time that RunTask was called plus the retry delay specified in the queue's RetryConfig. RunTask returns NOT_FOUND when it is called on a task that has already succeeded or permanently failed.
    /// </remarks>
    public Task<TaskModel> CloudtasksProjectsLocationsQueuesTasksRun(CloudtasksProjectsLocationsQueuesTasksRunRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}/tasks/{tasksId}:run"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
                new TemplateParam("tasksId", request.TasksId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TaskModel>(),
            CloudtasksProjectsLocationsQueuesTasksRunError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Test iam permissions queues
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TestIamPermissionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsQueuesTestIamPermissionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns permissions that a caller has on a Queue. If the resource does not exist, this will return an empty set of permissions, not a NOT_FOUND error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    /// </remarks>
    public Task<TestIamPermissionsResponse> CloudtasksProjectsLocationsQueuesTestIamPermissions(CloudtasksProjectsLocationsQueuesTestIamPermissionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/queues/{queuesId}:testIamPermissions"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
                new TemplateParam("queuesId", request.QueuesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TestIamPermissionsResponse>(),
            CloudtasksProjectsLocationsQueuesTestIamPermissionsError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update cmek config locations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CmekConfig"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CloudtasksProjectsLocationsUpdateCmekConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates or Updates a CMEK config. Updates the Customer Managed Encryption Key associated with the Cloud Tasks location (Creates if the key does not already exist). All new tasks created in the location will be encrypted at-rest with the KMS-key provided in the config.
    /// </remarks>
    public Task<CmekConfig> CloudtasksProjectsLocationsUpdateCmekConfig(CloudtasksProjectsLocationsUpdateCmekConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/projects/{projectsId}/locations/{locationsId}/cmekConfig"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("locationsId", request.LocationsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CmekConfig>(),
            CloudtasksProjectsLocationsUpdateCmekConfigError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
