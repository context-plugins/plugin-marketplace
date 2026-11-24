using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DynamicFeed.Core;
using DynamicFeed.Core.Authentication;
using DynamicFeed.Core.Exceptions;
using DynamicFeed.Core.Models;
using DynamicFeed.Core.Request;
using DynamicFeed.Core.Response;
using DynamicFeed.Errors;
using DynamicFeed.Requests.History;

namespace DynamicFeed.Api;

public sealed class History
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal History(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// History
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="HistoryV1HistoryGetError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Archive coverage — what Dynamic Feed's permanent, append-only archive holds.
    /// <para>
    /// • No <c>tool</c> → the set of tools captured + a count.
    /// • <c>tool=</c> → that tool's captured date partitions, earliest/latest, and day count.
    /// </para>
    /// <para>
    /// This is the availability index over the un-backfillable history (the permanence moat): it tells an
    /// agent which days are on record for a tool. Row-level point-in-time values ("what was the value at
    /// time T") are a premium query that layers on the same Hive-partitioned archive.
    /// </para>
    /// </remarks>
    public Task<object> HistoryV1HistoryGet(HistoryV1HistoryGetRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/history"),
            [],
            [new Param("tool", request.Tool)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            HistoryV1HistoryGetError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
