using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using GoogleCloudStorageTransferService.Core;
using GoogleCloudStorageTransferService.Core.Authentication;
using GoogleCloudStorageTransferService.Core.Exceptions;
using GoogleCloudStorageTransferService.Core.Models;
using GoogleCloudStorageTransferService.Core.Request;
using GoogleCloudStorageTransferService.Core.Response;
using GoogleCloudStorageTransferService.Errors;
using GoogleCloudStorageTransferService.Models;
using GoogleCloudStorageTransferService.Requests.TransferJobs;

namespace GoogleCloudStorageTransferService.Api;

public sealed class TransferJobs
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TransferJobs(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create transferJobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransferJob"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferTransferJobsCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a transfer job that runs periodically.
    /// </remarks>
    public Task<TransferJob> StoragetransferTransferJobsCreate(StoragetransferTransferJobsCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transferJobs"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TransferJob>(),
            StoragetransferTransferJobsCreateError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete transferJobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferTransferJobsDeleteError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a transfer job. Deleting a transfer job sets its status to DELETED.
    /// </remarks>
    public Task<object> StoragetransferTransferJobsDelete(StoragetransferTransferJobsDeleteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transferJobs/{transferJobsId}"),
            [new TemplateParam("transferJobsId", request.TransferJobsId)],
            [new Param("projectId", request.ProjectId)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            StoragetransferTransferJobsDeleteError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get transferJobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransferJob"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferTransferJobsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets a transfer job.
    /// </remarks>
    public Task<TransferJob> StoragetransferTransferJobsGet(StoragetransferTransferJobsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transferJobs/{transferJobsId}"),
            [new TemplateParam("transferJobsId", request.TransferJobsId)],
            [new Param("projectId", request.ProjectId)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TransferJob>(),
            StoragetransferTransferJobsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List transferJobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListTransferJobsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferTransferJobsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists transfer jobs.
    /// </remarks>
    public Task<ListTransferJobsResponse> StoragetransferTransferJobsList(StoragetransferTransferJobsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transferJobs"),
            [],
            [
                new Param("filter", request.Filter),
                new Param("pageSize", request.PageSize),
                new Param("pageToken", request.PageToken),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListTransferJobsResponse>(),
            StoragetransferTransferJobsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Patch transferJobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TransferJob"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferTransferJobsPatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. <b>Note:</b> The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).
    /// </remarks>
    public Task<TransferJob> StoragetransferTransferJobsPatch(StoragetransferTransferJobsPatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transferJobs/{transferJobsId}"),
            [new TemplateParam("transferJobsId", request.TransferJobsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<TransferJob>(),
            StoragetransferTransferJobsPatchError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Run transferJobs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferTransferJobsRunError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts a new operation for the specified transfer job. A <c>TransferJob</c> has a maximum of one active <c>TransferOperation</c>. If this method is called while a <c>TransferOperation</c> is active, an error is returned.
    /// </remarks>
    public Task<Operation> StoragetransferTransferJobsRun(StoragetransferTransferJobsRunRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transferJobs/{transferJobsId}:run"),
            [new TemplateParam("transferJobsId", request.TransferJobsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Operation>(),
            StoragetransferTransferJobsRunError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
