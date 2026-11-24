using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.Polls;

namespace Beehiiv.Api;

public sealed class Polls
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Polls(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// List polls OAuth Scope: polls:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PollsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index15Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all polls belonging to a specific publication. Poll choices are always included. Use <c>expand[]=stats</c> to include aggregate vote counts per choice.
    /// </remarks>
    public Task<PollsListResponse> Index15(Index15Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/polls"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("page", request.Page),
                new Param("order_by", request.OrderBy),
                new Param("direction", request.Direction),
                new Param("expand[]", request.Expand),
                new Param("post_id", request.PostId),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PollsListResponse>(),
            Index15Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List poll responses OAuth Scope: polls:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PollResponsesListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListResponsesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all individual subscriber responses for a specific poll with cursor-based pagination. Use this endpoint for large datasets instead of the <c>expand[]=poll_responses</c> parameter on the poll show endpoint.
    /// </remarks>
    public Task<PollResponsesListResponse> ListResponses(ListResponsesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/polls/{pollId}/responses"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("pollId", request.PollId)],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("page", request.Page),
                new Param("order_by", request.OrderBy),
                new Param("direction", request.Direction),
                new Param("expand[]", request.Expand),
                new Param("post_id", request.PostId),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PollResponsesListResponse>(),
            ListResponsesError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get poll OAuth Scope: polls:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PollShowResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show11Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve detailed information about a specific poll belonging to a publication. Use <c>expand[]=stats</c> for aggregate vote counts, or <c>expand[]=poll_responses</c> for individual subscriber responses.
    /// </remarks>
    public Task<PollShowResponse> Show11(Show11Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/polls/{pollId}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("pollId", request.PollId)],
            [new Param("expand[]", request.Expand)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PollShowResponse>(),
            Show11Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
