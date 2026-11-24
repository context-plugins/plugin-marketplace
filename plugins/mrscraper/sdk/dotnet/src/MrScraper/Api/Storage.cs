using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using MrScraper.Core;
using MrScraper.Core.Authentication;
using MrScraper.Core.Exceptions;
using MrScraper.Core.Models;
using MrScraper.Core.Request;
using MrScraper.Core.Response;
using MrScraper.Errors;
using MrScraper.Requests.Storage;

namespace MrScraper.Api;

public sealed class Storage
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Storage(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a stored result
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStorageByKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the stored body directly with application/json content type, without a message/data envelope. The key may contain multiple path segments and must belong to the authenticated user.
    /// </remarks>
    public Task GetStorageByKey(GetStorageByKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultScraperServiceGatewayAuthApi("/storage/{key}"),
            [new TemplateParam("key", request.Key)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            GetStorageByKeyError.Response,
            AuthScheme.Any(_auth.ApiKey, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
