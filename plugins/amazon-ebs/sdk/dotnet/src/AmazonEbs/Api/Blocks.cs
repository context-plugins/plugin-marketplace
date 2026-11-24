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
using AmazonEbs.Requests.Blocks;

namespace AmazonEbs.Api;

public sealed class Blocks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Blocks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Snapshot Block
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetSnapshotBlockResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSnapshotBlockError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the data in a block in an Amazon Elastic Block Store snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.
    /// </remarks>
    public Task<GetSnapshotBlockResponse> GetSnapshotBlock(GetSnapshotBlockRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snapshots/{SnapshotId}/blocks/{BlockIndex}"),
            [new TemplateParam("SnapshotId", request.SnapshotId), new TemplateParam("BlockIndex", request.BlockIndex)],
            [new Param("blockToken", request.BlockToken)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetSnapshotBlockResponse>(),
            GetSnapshotBlockError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Snapshot Blocks
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListSnapshotBlocksResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSnapshotBlocksError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns information about the blocks in an Amazon Elastic Block Store snapshot. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.
    /// </remarks>
    public Task<ListSnapshotBlocksResponse> ListSnapshotBlocks(ListSnapshotBlocksRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snapshots/{SnapshotId}/blocks"),
            [new TemplateParam("SnapshotId", request.SnapshotId)],
            [
                new Param("pageToken", request.PageToken),
                new Param("maxResults", request.MaxResults),
                new Param("startingBlockIndex", request.StartingBlockIndex),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ListSnapshotBlocksResponse>(),
            ListSnapshotBlocksError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Put Snapshot Block
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PutSnapshotBlockResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutSnapshotBlockError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Writes a block of data to a snapshot. If the specified block contains data, the existing data is overwritten. The target snapshot must be in the pending state. Data written to a snapshot must be aligned with 512-KiB sectors. You should always retry requests that receive server (5xx) error responses, and ThrottlingException and RequestThrottledException client error responses. For more information see Error retries in the Amazon Elastic Compute Cloud User Guide.
    /// </remarks>
    public Task<PutSnapshotBlockResponse> PutSnapshotBlock(PutSnapshotBlockRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/snapshots/{SnapshotId}/blocks/{BlockIndex}"),
            [new TemplateParam("SnapshotId", request.SnapshotId), new TemplateParam("BlockIndex", request.BlockIndex)],
            [],
            [
                new HeaderParam("x-amz-Data-Length", request.XAmzDataLength),
                new HeaderParam("x-amz-Checksum", request.XAmzChecksum),
                new HeaderParam("x-amz-Checksum-Algorithm", request.XAmzChecksumAlgorithm),
                new HeaderParam("x-amz-Progress", request.XAmzProgress),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PutSnapshotBlockResponse>(),
            PutSnapshotBlockError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
