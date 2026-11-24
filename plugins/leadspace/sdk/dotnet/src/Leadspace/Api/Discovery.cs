using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Leadspace.Core;
using Leadspace.Core.Exceptions;
using Leadspace.Core.Models;
using Leadspace.Core.Request;
using Leadspace.Core.Response;
using Leadspace.Errors;
using Leadspace.Models;
using Leadspace.Requests.Discovery;

namespace Leadspace.Api;

/// <summary>
/// Bulk account expansion into net-new contacts
/// </summary>
public sealed class Discovery
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Discovery(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Submit a bulk account discovery (expansion) job
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="DiscoveryAccepted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DiscoverCompanyContactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Expands up to 500 accounts into ranked contacts. Either companyName or companyWebsite is mandatory for each account.
    /// </remarks>
    public Task<DiscoveryAccepted> DiscoverCompanyContacts(DiscoverCompanyContactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/expansion/company"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<DiscoveryAccepted>(),
            DiscoverCompanyContactsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
