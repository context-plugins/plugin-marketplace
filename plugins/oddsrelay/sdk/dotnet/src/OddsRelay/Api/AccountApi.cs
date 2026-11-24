using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using OddsRelay.Core;
using OddsRelay.Core.Authentication;
using OddsRelay.Core.Exceptions;
using OddsRelay.Core.Request;
using OddsRelay.Core.Response;
using OddsRelay.Errors;
using OddsRelay.Models;

namespace OddsRelay.Api;

/// <summary>
/// Usage and prices. Free.
/// </summary>
public sealed class AccountApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AccountApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// The price table
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PriceTable"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPricingError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The price table every call is priced from, byte for byte. Free. <c>ETag</c> is its SHA-256 (<c>-gz</c> on the gzip copy); 304 on a match. Gzip unless refused.
    /// </remarks>
    public Task<PriceTable> GetPricing(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/pricing"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PriceTable>(),
            GetPricingError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Your plan, balance, key, flood cap and scope
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Usage"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Free, flood-capped, and answered for a SUSPENDED account too (it shows the reason). Plain JSON. <c>scope</c> and <c>scope_version</c> are your account's scope (both null when it has none); <c>key.products</c> is your key's products within it.
    /// </remarks>
    public Task<Usage> GetUsage(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/usage"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Usage>(),
            GetUsageError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader),
            requestOptions,
            cancellationToken);
}
