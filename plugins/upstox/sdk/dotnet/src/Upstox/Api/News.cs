using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Upstox.Core;
using Upstox.Core.Exceptions;
using Upstox.Core.Models;
using Upstox.Core.Request;
using Upstox.Core.Response;
using Upstox.Errors;
using Upstox.Models;
using Upstox.Requests.News;

namespace Upstox.Api;

public sealed class News
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal News(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get News
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetNewsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetNewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fetches news articles for the given instrument keys, or the user's current positions or holdings.
    /// </remarks>
    public Task<GetNewsResponse> GetNews(GetNewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/news"),
            [],
            [
                new Param("category", request.Category),
                new Param("instrument_keys", request.InstrumentKeys),
                new Param("page_number", request.PageNumber),
                new Param("page_size", request.PageSize),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetNewsResponse>(),
            GetNewsError.Response,
            _auth.Oauth2,
            requestOptions,
            cancellationToken);
}
