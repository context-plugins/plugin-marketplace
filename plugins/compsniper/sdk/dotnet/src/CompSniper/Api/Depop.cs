using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CompSniper.Core;
using CompSniper.Core.Exceptions;
using CompSniper.Core.Models;
using CompSniper.Core.Request;
using CompSniper.Core.Response;
using CompSniper.Errors;
using CompSniper.Models;
using CompSniper.Requests.Depop;

namespace CompSniper.Api;

public sealed class Depop
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Depop(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Depop active listings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1DepopListingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetV1DepopListingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Current Depop listings in the US, UK, Australia or Canada with asking price, original price before a discount, shipping, brand, size, condition and seller. Page with nextCursor. One successful call uses one request.
    /// </remarks>
    public Task<V1DepopListingsResponse> GetV1DepopListings(GetV1DepopListingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/depop/listings"),
            [],
            [
                new Param("keyword", request.Keyword),
                new Param("country", request.Country),
                new Param("count", request.Count),
                new Param("cursor", request.Cursor),
            ],
            [new HeaderParam("X-Credit-Source", request.XCreditSource)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1DepopListingsResponse>(),
            GetV1DepopListingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
