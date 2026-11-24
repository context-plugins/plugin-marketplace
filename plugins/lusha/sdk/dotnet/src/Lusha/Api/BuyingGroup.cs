using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Lusha.Core;
using Lusha.Core.Exceptions;
using Lusha.Core.Models;
using Lusha.Core.Request;
using Lusha.Core.Response;
using Lusha.Errors;
using Lusha.Models;
using Lusha.Requests.BuyingGroup;

namespace Lusha.Api;

/// <summary>
/// <b>Buying Group API:</b> Identify and prioritize the buying committee within a set of target companies.
/// </summary>
public sealed class BuyingGroup
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal BuyingGroup(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Buying Group Contacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3BuyingGroupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactsBuyingGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Identify the buying group within a set of target companies. Supply companies by <c>domain</c> or Lusha company <c>id</c> - the model scores and labels each returned contact with a persona role.
    /// <para>
    /// <b>Personas:</b>
    /// - <c>decision_maker</c> — has budget or sign-off authority
    /// - <c>potential_champion</c> — likely internal advocate for the purchase
    /// - <c>end_user</c> — likely day-to-day user of the product
    /// </para>
    /// <para>
    /// Pass <c>personas</c> to filter to specific roles, or omit it to get all three. Use <c>contactsLimit</c> to cap how many contacts are returned per company (default 60).
    /// </para>
    /// <para>
    /// Results are lightweight previews grouped by company. Each contact includes a <c>has</c> field listing available data points, a <c>canReveal</c> field showing what can be unlocked via Enrich, a <c>roles</c> array with the assigned persona(s), and a <c>score</c> (0-1) reflecting relevance to the assigned role.
    /// </para>
    /// <para>
    /// Use Enrich Contacts with the returned contact <c>id</c> to reveal emails and phones.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per contact returned via the <c>buyingGroupContact</c> action.
    /// </para>
    /// </remarks>
    public Task<V3BuyingGroupResponse> GetContactsBuyingGroup(GetContactsBuyingGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/buying-group"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3BuyingGroupResponse>(),
            GetContactsBuyingGroupError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
