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
using GoogleCloudStorageTransferService.Requests.TransferOperations;

namespace GoogleCloudStorageTransferService.Api;

public sealed class TransferOperations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal TransferOperations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Cancel transferOperations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferTransferOperationsCancelError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the <c>cancel</c> request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, <c>cancel</c> does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the <c>cancel</c> request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.
    /// </remarks>
    public Task<object> StoragetransferTransferOperationsCancel(StoragetransferTransferOperationsCancelRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transferOperations/{transferOperationsId}:cancel"),
            [new TemplateParam("transferOperationsId", request.TransferOperationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            StoragetransferTransferOperationsCancelError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get transferOperations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Operation"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferTransferOperationsGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    /// </remarks>
    public Task<Operation> StoragetransferTransferOperationsGet(StoragetransferTransferOperationsGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transferOperations/{transferOperationsId}"),
            [new TemplateParam("transferOperationsId", request.TransferOperationsId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Operation>(),
            StoragetransferTransferOperationsGetError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List transferOperations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListOperationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferTransferOperationsListError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.
    /// </remarks>
    public Task<ListOperationsResponse> StoragetransferTransferOperationsList(StoragetransferTransferOperationsListRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transferOperations"),
            [],
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
            StoragetransferTransferOperationsListError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Pause transferOperations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferTransferOperationsPauseError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Pauses a transfer operation.
    /// </remarks>
    public Task<object> StoragetransferTransferOperationsPause(StoragetransferTransferOperationsPauseRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transferOperations/{transferOperationsId}:pause"),
            [new TemplateParam("transferOperationsId", request.TransferOperationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            StoragetransferTransferOperationsPauseError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resume transferOperations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StoragetransferTransferOperationsResumeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resumes a transfer operation that is paused.
    /// </remarks>
    public Task<object> StoragetransferTransferOperationsResume(StoragetransferTransferOperationsResumeRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/transferOperations/{transferOperationsId}:resume"),
            [new TemplateParam("transferOperationsId", request.TransferOperationsId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<object>(),
            StoragetransferTransferOperationsResumeError.Response,
            AuthScheme.Any(_auth.Oauth2, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
