using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;
using DidLogic.Requests.Purchases;

namespace DidLogic.Api;

public sealed class Purchases
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Purchases(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List purchased DID numbers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1PurchasesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PurchasesIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a paginated list of DID numbers purchased by the authenticated user.
    /// <para>
    /// <b>Features:</b>
    /// - Ordered by most recent first
    /// - Pagination: 100 DIDs per page (max 1000)
    /// - Available in JSON and CSV formats
    /// </para>
    /// <para>
    /// <b>Returned Information:</b>
    /// - DID number and status
    /// - Purchase and expiration dates
    /// - Monthly cost and features
    /// - SMS/voice capabilities
    /// </para>
    /// <para>
    /// <c>purchases[].number</c> feeds purchases_destinations_index, purchases_destinations_create,
    /// purchases_destinations_update, purchases_destinations_destroy, numbers_purchase_destroy and
    /// sms_create: it is the <c>purchase_id</c> of the destination operations, an entry of <c>did_numbers[]</c>
    /// when releasing numbers, and <c>sm[source]</c> when the number has SMS enabled. See also: numbers_index,
    /// the same numbers with their inventory id.
    /// </para>
    /// </remarks>
    public Task<ApiV1PurchasesResponse> PurchasesIndex(PurchasesIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/purchases"),
            [],
            [new Param("page", request.Page), new Param("per_page", request.PerPage)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1PurchasesResponse>(),
            PurchasesIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
