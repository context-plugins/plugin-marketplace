using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudTalentSolution.Core;
using GoogleCloudTalentSolution.Core.Authentication;
using GoogleCloudTalentSolution.Core.Configuration;
using GoogleCloudTalentSolution.Core.Exceptions;
using GoogleCloudTalentSolution.Core.Logging;
using GoogleCloudTalentSolution.Core.Models;
using GoogleCloudTalentSolution.Core.Request;
using GoogleCloudTalentSolution.Core.Response;
using GoogleCloudTalentSolution.Errors;
using GoogleCloudTalentSolution.Models;
using GoogleCloudTalentSolution.Requests;

namespace GoogleCloudTalentSolution;

/// <summary>
/// Generated from Google's published Discovery document for Cloud Talent Solution API (jobs v4, revision 20261030). 23 operation(s).
/// </summary>
public sealed class GoogleCloudTalentSolutionClient
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    public GoogleCloudTalentSolutionClient(HttpClient httpClient, GoogleCloudTalentSolutionClientOptions options)
    {
        _server = new Server(options.Environment, options.Server);
        var queryParameterFactory = new QueryParameterFactory([]);
        var templateParamsFactory = new TemplateParamsFactory([]);
        var urlFactory = new UriFactory(queryParameterFactory, templateParamsFactory);
        var httpStatusPolicy = new HttpStatusPolicy([]);
        var headersFactory = new HeadersFactory([
            new HeaderParam("User-Agent", "GoogleCloudTalentSolutionClient/v4 CSharp"),
            new HeaderParam("X-APIMatic-Lang", "CSharp"),
            new HeaderParam("X-APIMatic-Package-Version", "v4"),
            new HeaderParam("X-APIMatic-Gen-Version", "4.0.0"),
            new HeaderParam("X-APIMatic-OS", RuntimeEnvironment.Os),
            new HeaderParam("X-APIMatic-Runtime", RuntimeEnvironment.Runtime),
        ]);
        var resiliencePipelineFactory = new ResiliencePipelineFactory(options.Retry, options.TimeProvider);
        var httpLogger = new HttpLogger(
            options.Logging.WithEnvironmentDefaults("GOOGLE_CLOUD_TALENT_SOLUTION_LOG"),
            "GoogleCloudTalentSolutionClient",
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
    /// Get operations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<Operation> JobsProjectsOperationsGet(JobsProjectsOperationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/operations/{operationsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("operationsId", request.OperationsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            JobsProjectsOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create clientEvents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ClientEvent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsClientEventsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Report events issued when end user interacts with customer's application that uses Cloud Talent Solution. You may inspect the created events in self service tools. Learn more about self service tools.
    /// </remarks>
    public Task<ClientEvent> JobsProjectsTenantsClientEventsCreate(JobsProjectsTenantsClientEventsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/clientEvents"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ClientEvent>(),
            JobsProjectsTenantsClientEventsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Company"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsCompaniesCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new company entity.
    /// </remarks>
    public Task<Company> JobsProjectsTenantsCompaniesCreate(JobsProjectsTenantsCompaniesCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Company>(),
            JobsProjectsTenantsCompaniesCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsCompaniesDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes specified company. Prerequisite: The company has no jobs associated with it.
    /// </remarks>
    public Task<object> JobsProjectsTenantsCompaniesDelete(JobsProjectsTenantsCompaniesDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("tenantsId", request.TenantsId),
                new TemplateParam("companiesId", request.CompaniesId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            JobsProjectsTenantsCompaniesDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Company"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsCompaniesGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves specified company.
    /// </remarks>
    public Task<Company> JobsProjectsTenantsCompaniesGet(JobsProjectsTenantsCompaniesGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("tenantsId", request.TenantsId),
                new TemplateParam("companiesId", request.CompaniesId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Company>(),
            JobsProjectsTenantsCompaniesGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListCompaniesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsCompaniesListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all companies associated with the project.
    /// </remarks>
    public Task<ListCompaniesResponse> JobsProjectsTenantsCompaniesList(JobsProjectsTenantsCompaniesListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
                new Param("requireOpenJobs", request.RequireOpenJobs),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListCompaniesResponse>(),
            JobsProjectsTenantsCompaniesListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Company"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsCompaniesPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates specified company.
    /// </remarks>
    public Task<Company> JobsProjectsTenantsCompaniesPatch(JobsProjectsTenantsCompaniesPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/companies/{companiesId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("tenantsId", request.TenantsId),
                new TemplateParam("companiesId", request.CompaniesId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Company>(),
            JobsProjectsTenantsCompaniesPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Complete query tenants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompleteQueryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsCompleteQueryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Completes the specified prefix with keyword suggestions. Intended for use by a job search auto-complete search box.
    /// </remarks>
    public Task<CompleteQueryResponse> JobsProjectsTenantsCompleteQuery(JobsProjectsTenantsCompleteQueryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}:completeQuery"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [
                new Param("company", request.Company),
                new Param("languageCodes", request.LanguageCodes),
                new Param("pageSize", request.PageSize),
                new Param("query", request.Query),
                new Param("scope", request.Scope),
                new Param("type", request.Type),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompleteQueryResponse>(),
            JobsProjectsTenantsCompleteQueryError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create tenants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Tenant"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new tenant entity.
    /// </remarks>
    public Task<Tenant> JobsProjectsTenantsCreate(JobsProjectsTenantsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants"),
            [new TemplateParam("projectsId", request.ProjectsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Tenant>(),
            JobsProjectsTenantsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete tenants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes specified tenant.
    /// </remarks>
    public Task<object> JobsProjectsTenantsDelete(JobsProjectsTenantsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            JobsProjectsTenantsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get tenants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Tenant"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves specified tenant.
    /// </remarks>
    public Task<Tenant> JobsProjectsTenantsGet(JobsProjectsTenantsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Tenant>(),
            JobsProjectsTenantsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch create jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsJobsBatchCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Begins executing a batch create jobs operation.
    /// </remarks>
    public Task<Operation> JobsProjectsTenantsJobsBatchCreate(JobsProjectsTenantsJobsBatchCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchCreate"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            JobsProjectsTenantsJobsBatchCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch delete jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsJobsBatchDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Begins executing a batch delete jobs operation.
    /// </remarks>
    public Task<Operation> JobsProjectsTenantsJobsBatchDelete(JobsProjectsTenantsJobsBatchDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchDelete"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            JobsProjectsTenantsJobsBatchDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Batch update jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsJobsBatchUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Begins executing a batch update jobs operation.
    /// </remarks>
    public Task<Operation> JobsProjectsTenantsJobsBatchUpdate(JobsProjectsTenantsJobsBatchUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:batchUpdate"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            JobsProjectsTenantsJobsBatchUpdateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Job"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsJobsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new job. Typically, the job becomes searchable within 10 seconds, but it may take up to 5 minutes.
    /// </remarks>
    public Task<Job> JobsProjectsTenantsJobsCreate(JobsProjectsTenantsJobsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Job>(),
            JobsProjectsTenantsJobsCreateError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsJobsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes the specified job. Typically, the job becomes unsearchable within 10 seconds, but it may take up to 5 minutes.
    /// </remarks>
    public Task<object> JobsProjectsTenantsJobsDelete(JobsProjectsTenantsJobsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("tenantsId", request.TenantsId),
                new TemplateParam("jobsId", request.JobsId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            JobsProjectsTenantsJobsDeleteError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsJobsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves the specified job, whose status is OPEN or recently EXPIRED within the last 90 days.
    /// </remarks>
    public Task<Job> JobsProjectsTenantsJobsGet(JobsProjectsTenantsJobsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("tenantsId", request.TenantsId),
                new TemplateParam("jobsId", request.JobsId),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Job>(),
            JobsProjectsTenantsJobsGetError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsJobsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists jobs by filter.
    /// </remarks>
    public Task<ListJobsResponse> JobsProjectsTenantsJobsList(JobsProjectsTenantsJobsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [
                new Param("filter", request.Filter),
                new Param("jobView", request.JobView),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListJobsResponse>(),
            JobsProjectsTenantsJobsListError.Response,
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
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsJobsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates specified job. Typically, updated contents become visible in search results within 10 seconds, but it may take up to 5 minutes.
    /// </remarks>
    public Task<Job> JobsProjectsTenantsJobsPatch(JobsProjectsTenantsJobsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs/{jobsId}"),
            [
                new TemplateParam("projectsId", request.ProjectsId),
                new TemplateParam("tenantsId", request.TenantsId),
                new TemplateParam("jobsId", request.JobsId),
            ],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Job>(),
            JobsProjectsTenantsJobsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchJobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsJobsSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches for jobs using the provided SearchJobsRequest. This call constrains the visibility of jobs present in the database, and only returns jobs that the caller has permission to search against.
    /// </remarks>
    public Task<SearchJobsResponse> JobsProjectsTenantsJobsSearch(JobsProjectsTenantsJobsSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:search"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchJobsResponse>(),
            JobsProjectsTenantsJobsSearchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search for alert jobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchJobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsJobsSearchForAlertError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches for jobs using the provided SearchJobsRequest. This API call is intended for the use case of targeting passive job seekers (for example, job seekers who have signed up to receive email alerts about potential job opportunities), it has different algorithmic adjustments that are designed to specifically target passive job seekers. This call constrains the visibility of jobs present in the database, and only returns jobs the caller has permission to search against.
    /// </remarks>
    public Task<SearchJobsResponse> JobsProjectsTenantsJobsSearchForAlert(JobsProjectsTenantsJobsSearchForAlertRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}/jobs:searchForAlert"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SearchJobsResponse>(),
            JobsProjectsTenantsJobsSearchForAlertError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List tenants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTenantsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists all tenants associated with the project.
    /// </remarks>
    public Task<ListTenantsResponse> JobsProjectsTenantsList(JobsProjectsTenantsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants"),
            [new TemplateParam("projectsId", request.ProjectsId)],
            [new Param("pageSize", request.PageSize), new Param("pageToken", request.PageToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListTenantsResponse>(),
            JobsProjectsTenantsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch tenants
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Tenant"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="JobsProjectsTenantsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates specified tenant.
    /// </remarks>
    public Task<Tenant> JobsProjectsTenantsPatch(JobsProjectsTenantsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v4/projects/{projectsId}/tenants/{tenantsId}"),
            [new TemplateParam("projectsId", request.ProjectsId), new TemplateParam("tenantsId", request.TenantsId)],
            [new Param("updateMask", request.UpdateMask)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Tenant>(),
            JobsProjectsTenantsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
