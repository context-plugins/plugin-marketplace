using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Contentstack.Core;
using Contentstack.Core.Authentication;
using Contentstack.Core.Exceptions;
using Contentstack.Core.Models;
using Contentstack.Core.Request;
using Contentstack.Core.Response;
using Contentstack.Errors;
using Contentstack.Models;
using Contentstack.Requests.Synchronization;

namespace Contentstack.Api;

/// <summary>
/// The synchronization endpoints allow developers to sync published content incrementally, enabling efficient local caching and offline-first patterns.
/// </summary>
public sealed class Synchronization
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Synchronization(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Sync content
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SyncResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SyncContentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Initiates an initial sync or continues a paginated sync of all published entries and assets in the stack. Use init=true for the first sync to receive a sync token. Use the sync_token from subsequent responses to fetch only the changes since the last sync.
    /// </remarks>
    public Task<SyncResponse> SyncContent(SyncContentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultContentstackAssetsApi("/stacks/sync"),
            [],
            [
                new Param("init", request.Init),
                new Param("sync_token", request.SyncToken),
                new Param("pagination_token", request.PaginationToken),
                new Param("type", request.Type),
                new Param("content_type_uid", request.ContentTypeUid),
                new Param("locale", request.Locale),
            ],
            [new HeaderParam("api_key", request.ApiKey), new HeaderParam("access_token", request.AccessToken)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SyncResponse>(),
            SyncContentError.Response,
            AuthScheme.All(_auth.ApiKey, _auth.DeliveryToken),
            requestOptions,
            cancellationToken);
}
