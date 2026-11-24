using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Surfe.Core;
using Surfe.Core.Exceptions;
using Surfe.Core.Request;
using Surfe.Core.Response;
using Surfe.Errors;
using Surfe.Models;

namespace Surfe.Api;

/// <summary>
/// Credit balance and account utilities.
/// </summary>
public sealed class Account
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Account(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get credit balance
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditBalance"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCreditsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Return the remaining credit balance across the email, mobile, and search/ICP credit pools.
    /// </remarks>
    public Task<CreditBalance> GetCredits(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/credits"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CreditBalance>(),
            GetCreditsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
