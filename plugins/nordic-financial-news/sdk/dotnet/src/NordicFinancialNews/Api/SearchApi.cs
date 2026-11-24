using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using NordicFinancialNews.Core;
using NordicFinancialNews.Core.Exceptions;
using NordicFinancialNews.Core.Models;
using NordicFinancialNews.Core.Request;
using NordicFinancialNews.Core.Response;
using NordicFinancialNews.Errors;
using NordicFinancialNews.Models;
using NordicFinancialNews.Requests.SearchApi;

namespace NordicFinancialNews.Api;

public sealed class SearchApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SearchApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SearchResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiV1SearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search across articles, stories, companies, countries, exchanges, and indices. Results are grouped by resource type and ranked by relevance. Use <c>type</c> to limit which resource types are searched.
    /// </remarks>
    public Task<SearchResult> GetApiV1Search(GetApiV1SearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/search"),
            [],
            [new Param("q", request.Q), new Param("type", request.Type), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SearchResult>(),
            GetApiV1SearchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
