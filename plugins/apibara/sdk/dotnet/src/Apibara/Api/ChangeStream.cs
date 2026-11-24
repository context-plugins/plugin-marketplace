using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Apibara.Core;
using Apibara.Core.Exceptions;
using Apibara.Core.Models;
using Apibara.Core.Request;
using Apibara.Core.Response;
using Apibara.Errors;
using Apibara.Models;
using Apibara.Requests.ChangeStream;

namespace Apibara.Api;

/// <summary>
/// Durable, sequence-ordered material vehicle changes for reliable synchronization and replay.
/// </summary>
public sealed class ChangeStream
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ChangeStream(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Read durable vehicle changes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="VehicleChangesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVehicleChangesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Read material Copart and IAAI changes in monotonically increasing sequence order. Persist meta.next_cursor only after your local transaction succeeds, then pass it back as after on the next request. Sequence gaps are valid. Non-material technical null/zero initialization noise is filtered. If a cursor falls outside the retained window, the API returns HTTP 410 cursor_expired instead of silently skipping events. New reserve.changed events carry pricing.seller_reserve.* fields when a source-observed reserve status or inferred threshold changes. Reserve Off alone does not establish a numerical reserve.
    /// </remarks>
    public Task<VehicleChangesResponse> ListVehicleChanges(ListVehicleChangesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/changes"),
            [],
            [
                new Param("after", request.After),
                new Param("limit", request.Limit),
                new Param("platform", request.Platform),
                new Param("event_type", request.EventType),
                new Param("terminal", request.Terminal),
                new Param("lot_number", request.LotNumber),
                new Param("vin", request.Vin),
                new Param("include_record", request.IncludeRecord),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<VehicleChangesResponse>(),
            ListVehicleChangesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
