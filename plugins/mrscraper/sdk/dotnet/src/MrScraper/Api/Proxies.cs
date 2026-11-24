using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MrScraper.Core;
using MrScraper.Core.ErrorResponse;
using MrScraper.Core.Exceptions;
using MrScraper.Core.Models;
using MrScraper.Core.Request;
using MrScraper.Core.Response;
using MrScraper.Models;
using MrScraper.Requests.Proxies;

namespace MrScraper.Api;

public sealed class Proxies
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Proxies(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// GET /api/v1/proxies/user/requests-bandwidth
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetApiV1ProxiesUserRequestsBandwidthResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task<GetApiV1ProxiesUserRequestsBandwidthResponse> GetApiV1ProxiesUserRequestsBandwidth(GetApiV1ProxiesUserRequestsBandwidthRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/proxies/user/requests-bandwidth"),
            [],
            [new Param("endDate", request.EndDate), new Param("startDate", request.StartDate)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetApiV1ProxiesUserRequestsBandwidthResponse>(),
            RawErrorResponse.Instance,
            _auth.ApiKey,
            requestOptions,
            cancellationToken);
}
