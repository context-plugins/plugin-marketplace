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
using Beehiiv.Requests.Automations;

namespace Beehiiv.Api;

public sealed class Automations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Automations(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// List automations OAuth Scope: automations:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index6Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve automations for a publication.
    /// </remarks>
    public Task<AutomationsListResponse> Index6(Index6Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/automations"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [new Param("expand[]", request.Expand), new Param("limit", request.Limit), new Param("page", request.Page)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AutomationsListResponse>(),
            Index6Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List automation emails
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationEmailsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListEmailsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all emails belonging to a specific automation, including engagement statistics for each email.
    /// </remarks>
    public Task<AutomationEmailsListResponse> ListEmails(ListEmailsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/automations/{automationId}/emails"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("automationId", request.AutomationId),
            ],
            [new Param("limit", request.Limit), new Param("cursor", request.Cursor), new Param("page", request.Page)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AutomationEmailsListResponse>(),
            ListEmailsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get automation OAuth Scope: automations:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AutomationsGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show3Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single automation for a publication.
    /// </remarks>
    public Task<AutomationsGetResponse> Show3(Show3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/automations/{automationId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("automationId", request.AutomationId),
            ],
            [new Param("expand[]", request.Expand)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AutomationsGetResponse>(),
            Show3Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
