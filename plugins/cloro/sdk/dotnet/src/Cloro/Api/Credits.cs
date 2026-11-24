using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cloro.Core;
using Cloro.Core.Exceptions;
using Cloro.Core.Request;
using Cloro.Core.Response;
using Cloro.Errors;
using Cloro.Models;

namespace Cloro.Api;

public sealed class Credits
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Credits(RawClient rawClient, Server server, AuthSchemes auth)
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
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreditsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCreditsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Read your organization's current credit balance and billing cycle. Lets you observe your balance programmatically — including from async-only workloads — without making a sync /v1/monitor/* request just to inspect the X-Credits-Remaining header. The balance is cached and can lag by up to 60 seconds. Queued async tasks are re-checked against your live balance when the scheduler picks them up.
    /// </remarks>
    public Task<CreditsResponse> GetCredits(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/credits"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CreditsResponse>(),
            GetCreditsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
