using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AppstoreSpy.Core;
using AppstoreSpy.Core.Exceptions;
using AppstoreSpy.Core.Models;
using AppstoreSpy.Core.Request;
using AppstoreSpy.Core.Response;
using AppstoreSpy.Errors;
using AppstoreSpy.Models;
using AppstoreSpy.Requests.Suggestions;

namespace AppstoreSpy.Api;

/// <summary>
/// Google Play search autocomplete suggestions for a term, country and language.
/// </summary>
public sealed class Suggestions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Suggestions(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Google Play keyword suggestions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Suggest"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSuggestsPlaySuggestionsGet2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns Google Play search autocomplete suggestions for a term in one country and language. Responds 202 with a partial result while a fresh crawl is in progress; <c>freshness</c> sets how old a cached result may be before it is recrawled.
    /// </remarks>
    public Task<Suggest> GetSuggestsPlaySuggestionsGet2(GetSuggestsPlaySuggestionsGet2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/play/suggestions"),
            [],
            [
                new Param("q", request.Q),
                new Param("country", request.Country),
                new Param("lang", request.Lang),
                new Param("freshness", request.Freshness),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Suggest>(),
            GetSuggestsPlaySuggestionsGet2Error.Response,
            _auth.ApiKeyHeader,
            requestOptions,
            cancellationToken);
}
