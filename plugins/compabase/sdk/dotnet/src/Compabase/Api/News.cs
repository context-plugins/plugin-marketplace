using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Compabase.Core;
using Compabase.Core.Authentication;
using Compabase.Core.Exceptions;
using Compabase.Core.Models;
using Compabase.Core.Request;
using Compabase.Core.Response;
using Compabase.Errors;
using Compabase.Requests.News;

namespace Compabase.Api;

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
    /// Company news &amp; UGC
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompaniesKrsByKrsNewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Published news articles and optional claimed description / logo from company UGC.
    /// Coverage is uneven (only companies with portal/UGC content).
    /// </remarks>
    public Task<object> GetCompaniesKrsByKrsNews(GetCompaniesKrsByKrsNewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/companies/krs/{krs}/news"),
            [new TemplateParam("krs", request.Krs)],
            [new Param("locale", request.Locale)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetCompaniesKrsByKrsNewsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Latest company news feed
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetNewsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Latest news published by Polish companies on their own websites, newest first, with the company (KRS) attached.
    /// </remarks>
    public Task<object> GetNews(GetNewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/news"),
            [],
            [
                new Param("since", request.Since),
                new Param("pkd", request.Pkd),
                new Param("city", request.City),
                new Param("locale", request.Locale),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetNewsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
