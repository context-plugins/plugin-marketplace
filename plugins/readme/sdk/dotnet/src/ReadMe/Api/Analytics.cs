using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using ReadMe.Core;
using ReadMe.Core.ErrorResponse;
using ReadMe.Core.Exceptions;
using ReadMe.Core.Extensions;
using ReadMe.Core.Models;
using ReadMe.Core.Request;
using ReadMe.Core.Response;
using ReadMe.Requests.Analytics;

namespace ReadMe.Api;

/// <summary>
/// Page view, quality, and search analytics
/// </summary>
public sealed class Analytics
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Analytics(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve Page View Statistics
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task GetPageviews(GetPageviewsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/pageviews"),
            [],
            [new Param("start", request.Start?.ToDate()), new Param("end", request.End?.ToDate())],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Page Quality Scores
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns quality scores produced by Docs Audit for the project's pages.
    /// </remarks>
    public Task GetQuality(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/quality"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Search Analytics
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    public Task GetSearch(RequestOptions? requestOptions = null, CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/search"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);
}
