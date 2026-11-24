using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Products;

namespace DoiT.Api;

/// <summary>
/// Metadata about cloud services and offerings.
/// </summary>
public sealed class Products
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Products(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List available products
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SupportV1MetadataProductsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListProductsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all the available products of specific platforms.
    /// </remarks>
    public Task<SupportV1MetadataProductsResponse> ListProducts(ListProductsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/support/v1/metadata/products"),
            [],
            [new Param("platform", request.Platform)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SupportV1MetadataProductsResponse>(),
            ListProductsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
