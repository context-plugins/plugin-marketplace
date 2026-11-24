using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CarsXe.Core;
using CarsXe.Core.Authentication;
using CarsXe.Core.Exceptions;
using CarsXe.Core.Models;
using CarsXe.Core.Request;
using CarsXe.Core.Response;
using CarsXe.Errors;
using CarsXe.Models;
using CarsXe.Requests.Recalls;

namespace CarsXe.Api;

/// <summary>
/// Safety recalls by VIN, including bulk batches
/// </summary>
public sealed class Recalls
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Recalls(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Download bulk recalls batch results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadRecallsBatchResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Download the results of a completed batch as CSV.
    /// </remarks>
    public Task<string> DownloadRecallsBatchResults(DownloadRecallsBatchResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/recalls-batch/download"),
            [],
            [new Param("batchId", request.BatchId)],
            [new HeaderParam("X-CarsXE-Batch-Token", request.XCarsXeBatchToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            PlainTextResponse.CreateString(),
            DownloadRecallsBatchResultsError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.RecallsBatchToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get bulk recalls batch results
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RecallsBatchResultsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRecallsBatchResultsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetch the per-VIN recall results of a completed batch as JSON.
    /// </remarks>
    public Task<V1RecallsBatchResultsResponse> GetRecallsBatchResults(GetRecallsBatchResultsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/recalls-batch/results"),
            [],
            [new Param("batchId", request.BatchId)],
            [new HeaderParam("X-CarsXE-Batch-Token", request.XCarsXeBatchToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RecallsBatchResultsResponse>(),
            GetRecallsBatchResultsError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.RecallsBatchToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get bulk recalls batch status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RecallsBatchStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRecallsBatchStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Check the processing status of a previously submitted batch.
    /// </remarks>
    public Task<V1RecallsBatchStatusResponse> GetRecallsBatchStatus(GetRecallsBatchStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/recalls-batch/status"),
            [],
            [new Param("batchId", request.BatchId)],
            [new HeaderParam("X-CarsXE-Batch-Token", request.XCarsXeBatchToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RecallsBatchStatusResponse>(),
            GetRecallsBatchStatusError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.RecallsBatchToken),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Recalls by Year, Make &amp; Model
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RecallsYmmResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetRecallsByYmmError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve open safety recalls for a vehicle by year, make, and model — no VIN required.
    /// </remarks>
    public Task<V1RecallsYmmResponse> GetRecallsByYmm(GetRecallsByYmmRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/recalls-ymm"),
            [],
            [new Param("year", request.Year), new Param("make", request.Make), new Param("model", request.Model)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RecallsYmmResponse>(),
            GetRecallsByYmmError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Vehicle Recalls
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RecallsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVehicleRecallsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve open safety recalls for a vehicle by VIN.
    /// </remarks>
    public Task<V1RecallsResponse> GetVehicleRecalls(GetVehicleRecallsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/recalls"),
            [],
            [new Param("vin", request.Vin)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1RecallsResponse>(),
            GetVehicleRecallsError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Submit a bulk recalls batch
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RecallsBatchSubmitResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubmitRecallsBatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Submit up to 10,000 VINs for asynchronous recall processing. Provide
    /// VINs as a JSON array (<c>vins</c>), inline CSV text (<c>csv</c>), or an HTTPS
    /// link to a CSV file (<c>csvUrl</c>). Optionally provide a <c>webhookUrl</c> that
    /// CarsXE will POST to when the batch finishes. Poll the status endpoint
    /// or wait for the webhook, then fetch results.
    /// <para>
    /// x402 submissions must use the JSON <c>vins</c> array. The <c>csv</c> and <c>csvUrl</c>
    /// forms require CarsXE API-key authentication.
    /// </para>
    /// </remarks>
    public Task<V1RecallsBatchSubmitResponse> SubmitRecallsBatch(SubmitRecallsBatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/recalls-batch/submit"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1RecallsBatchSubmitResponse>(),
            SubmitRecallsBatchError.Response,
            AuthScheme.Any(_auth.ApiKeyQuery, _auth.X402Payment).OrAnonymous(),
            requestOptions,
            cancellationToken);
}
