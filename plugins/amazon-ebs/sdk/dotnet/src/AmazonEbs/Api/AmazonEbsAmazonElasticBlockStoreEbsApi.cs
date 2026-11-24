using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AmazonEbs.Core;
using AmazonEbs.Core.Exceptions;
using AmazonEbs.Core.Models;
using AmazonEbs.Core.Request;
using AmazonEbs.Core.Response;
using AmazonEbs.Errors;
using AmazonEbs.Models;
using AmazonEbs.Requests.AmazonEbsAmazonElasticBlockStoreEbsApi;

namespace AmazonEbs.Api;

public sealed class AmazonEbsAmazonElasticBlockStoreEbsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AmazonEbsAmazonElasticBlockStoreEbsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Complete Snapshot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompleteSnapshotResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CompleteSnapshotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Seals and completes the snapshot after all of the required blocks of data have been written to it. Completing the snapshot changes the status to completed. You cannot write new blocks to a snapshot after it has been completed. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.
    /// </remarks>
    public Task<CompleteSnapshotResponse> CompleteSnapshot(CompleteSnapshotRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snapshots/completion/{SnapshotId}"),
            [new TemplateParam("SnapshotId", request.SnapshotId)],
            [],
            [
                new HeaderParam("x-amz-ChangedBlocksCount", request.XAmzChangedBlocksCount),
                new HeaderParam("x-amz-Checksum", request.XAmzChecksum),
                new HeaderParam("x-amz-Checksum-Algorithm", request.XAmzChecksumAlgorithm),
                new HeaderParam("x-amz-Checksum-Aggregation-Method", request.XAmzChecksumAggregationMethod),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            EmptyBody.Instance,
            JsonResponse.Create<CompleteSnapshotResponse>(),
            CompleteSnapshotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Changed Blocks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListChangedBlocksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListChangedBlocksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the blocks that are different between two Amazon Elastic Block Store snapshots of the same volume/snapshot lineage. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.
    /// </remarks>
    public Task<ListChangedBlocksResponse> ListChangedBlocks(ListChangedBlocksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snapshots/{SecondSnapshotId}/changedblocks"),
            [new TemplateParam("SecondSnapshotId", request.SecondSnapshotId)],
            [
                new Param("firstSnapshotId", request.FirstSnapshotId),
                new Param("pageToken", request.PageToken),
                new Param("maxResults", request.MaxResults),
                new Param("startingBlockIndex", request.StartingBlockIndex),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListChangedBlocksResponse>(),
            ListChangedBlocksError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Start Snapshot
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StartSnapshotResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartSnapshotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new Amazon EBS snapshot. The new snapshot enters the pending state after the request completes. After creating the snapshot, use PutSnapshotBlock to write blocks of data to the snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.
    /// </remarks>
    public Task<StartSnapshotResponse> StartSnapshot(StartSnapshotRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snapshots"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StartSnapshotResponse>(),
            StartSnapshotError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
