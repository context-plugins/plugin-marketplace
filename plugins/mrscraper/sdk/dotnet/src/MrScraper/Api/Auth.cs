using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MrScraper.Core;
using MrScraper.Core.Authentication;
using MrScraper.Core.ErrorResponse;
using MrScraper.Core.Exceptions;
using MrScraper.Core.Models;
using MrScraper.Core.Request;
using MrScraper.Core.Response;
using MrScraper.Models;
using MrScraper.Requests.Auth;

namespace MrScraper.Api;

public sealed class Auth
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Auth(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get subscription accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionAccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<SubscriptionAccountsResponse> GetSubscriptionAccounts(GetSubscriptionAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/subscription-accounts"),
            [],
            [],
            [new HeaderParam("x-backoffice-token", request.XBackofficeToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SubscriptionAccountsResponse>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
