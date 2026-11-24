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
using Beehiiv.Requests.ConditionSets;

namespace Beehiiv.Api;

public sealed class ConditionSets
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal ConditionSets(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// List condition sets OAuth Scope: condition_sets:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConditionSetsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index9Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all active condition sets for a publication. Condition sets define reusable audience segments for targeting content to specific subscribers. Use the <c>purpose</c> parameter to filter by a specific use case.
    /// </remarks>
    public Task<ConditionSetsListResponse> Index9(Index9Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/condition_sets"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("limit", request.Limit),
                new Param("cursor", request.Cursor),
                new Param("page", request.Page),
                new Param("purpose", request.Purpose),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ConditionSetsListResponse>(),
            Index9Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get condition set OAuth Scope: condition_sets:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ConditionSetShowResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show6Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single active dynamic content condition set for a publication. Use <c>expand[]=stats</c> to calculate and return the active subscriber count synchronously.
    /// </remarks>
    public Task<ConditionSetShowResponse> Show6(Show6Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/condition_sets/{conditionSetId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("conditionSetId", request.ConditionSetId),
            ],
            [new Param("expand[]", request.Expand)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ConditionSetShowResponse>(),
            Show6Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
