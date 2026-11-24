using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CompSniper.Core;
using CompSniper.Core.Exceptions;
using CompSniper.Core.Models;
using CompSniper.Core.Request;
using CompSniper.Core.Response;
using CompSniper.Errors;
using CompSniper.Requests.BulkSearch;

namespace CompSniper.Api;

public sealed class BulkSearch
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BulkSearch(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Stream multiple keyword searches
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IAsyncEnumerable{T}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="BulkSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search up to 20 unique keywords with at most three concurrent workers. If only part of the input fits the selected billing balance, the first keywords run and the remainder receive per-keyword quota_exceeded result events. Each successful keyword consumes one request; failures do not. Results stream as Server-Sent Events and may complete out of order.
    ///
    /// The returned sequence is single-shot and lazy: enumerate it (or dispose the enumerator) to
    /// release the underlying connection — a sequence that is never enumerated never releases it.
    /// Enumeration can throw <see cref="SdkTimeoutException"/> if the server stalls between frames,
    /// or <see cref="SdkConnectionException"/> if the connection drops mid-stream.
    /// </remarks>
    public Task<IAsyncEnumerable<string>> BulkSearchInvoke(BulkSearchOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bulk-search"),
            [],
            [],
            [
                new HeaderParam("X-Credit-Source", request.XCreditSource),
                new HeaderParam("Idempotency-Key", request.IdempotencyKey),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            PlainTextSseResponse.CreateString(),
            BulkSearchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download bulk-search CSV
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="string"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadBulkSearchCsvError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Download every successful keyword in one CSV, or pass index for one submitted keyword. Requires the same account's bearer credential.
    /// </remarks>
    public Task<string> DownloadBulkSearchCsv(DownloadBulkSearchCsvRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/bulk-search/{runId}/download.csv"),
            [new TemplateParam("runId", request.RunId)],
            [new Param("index", request.Index)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            PlainTextResponse.CreateString(),
            DownloadBulkSearchCsvError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
