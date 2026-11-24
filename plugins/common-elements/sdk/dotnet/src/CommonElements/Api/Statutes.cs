using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CommonElements.Core;
using CommonElements.Core.Exceptions;
using CommonElements.Core.Models;
using CommonElements.Core.Request;
using CommonElements.Core.Response;
using CommonElements.Errors;
using CommonElements.Models;
using CommonElements.Requests.Statutes;

namespace CommonElements.Api;

public sealed class Statutes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Statutes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Browse/enumerate every statute section on file for a state, grouped by chapter…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1StatutesByStateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StatutesByStateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Browse/enumerate every statute section on file for a state, grouped by chapter — the companion to statutes/search for "show me everything" rather than a keyword match. Filter to one chapter or a tagged topic.
    /// <para>
    /// <b>Plan:</b> Free keys: up to 50 rows per request; paid tiers raise the cap.
    /// </para>
    /// </remarks>
    public Task<ApiV1StatutesByStateResponse> StatutesByState(StatutesByStateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/statutes/by-state"),
            [],
            [
                new Param("state", request.State),
                new Param("chapter", request.Chapter),
                new Param("topic", request.Topic),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1StatutesByStateResponse>(),
            StatutesByStateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Full-text search across the community-association statute corpus, ranked by…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1StatutesSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StatutesSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Full-text search across the community-association statute corpus, ranked by relevance. The endpoint behind the statute search on commonelements.com, available programmatically.
    /// <para>
    /// <b>Plan:</b> Free keys: up to 50 rows per request; paid tiers raise the cap.
    /// </para>
    /// </remarks>
    public Task<ApiV1StatutesSearchResponse> StatutesSearch(StatutesSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/statutes/search"),
            [],
            [
                new Param("q", request.Q),
                new Param("state", request.State),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1StatutesSearchResponse>(),
            StatutesSearchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The full text and metadata for one statute section, including its parent…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1StatutesSectionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StatutesSectionDetailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The full text and metadata for one statute section, including its parent chapter and formatted citation. Follow-up call after search or by-state to read the section in full.
    /// </remarks>
    public Task<ApiV1StatutesSectionsResponse> StatutesSectionDetail(StatutesSectionDetailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/statutes/sections/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1StatutesSectionsResponse>(),
            StatutesSectionDetailError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
