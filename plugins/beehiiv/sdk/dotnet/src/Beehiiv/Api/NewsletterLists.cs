using System;
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
using Beehiiv.Requests.NewsletterLists;

namespace Beehiiv.Api;

public sealed class NewsletterLists
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal NewsletterLists(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create newsletter list OAuth Scope: newsletter_lists:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsletterListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create7Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new newsletter list for a publication. The list will be created with an active status. The slug will be auto-generated from the name if not provided.
    /// </remarks>
    public Task<NewsletterListResponse> Create7(Create7Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/newsletter_lists"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NewsletterListResponse>(),
            Create7Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete newsletter list OAuth Scope: newsletter_lists:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Delete2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a newsletter list belonging to a specific publication.
    /// </remarks>
    public Task Delete2(Delete2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/newsletter_lists/{newsletterListId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("newsletterListId", request.NewsletterListId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            Delete2Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List newsletter lists OAuth Scope: newsletter_lists:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsletterListIndexResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index14Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List all newsletter lists for a publication.
    /// </remarks>
    public Task<NewsletterListIndexResponse> Index14(Index14Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/newsletter_lists"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("limit", request.Limit),
                new Param("page", request.Page),
                new Param("direction", request.Direction),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NewsletterListIndexResponse>(),
            Index14Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get newsletter list OAuth Scope: newsletter_lists:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsletterListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show10Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single newsletter list belonging to a specific publication.
    /// </remarks>
    public Task<NewsletterListResponse> Show10(Show10Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/newsletter_lists/{newsletterListId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("newsletterListId", request.NewsletterListId),
            ],
            [],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NewsletterListResponse>(),
            Show10Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update newsletter list OAuth Scope: newsletter_lists:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NewsletterListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Update2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a newsletter list belonging to a specific publication.
    /// </remarks>
    public Task<NewsletterListResponse> Update2(Update2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/newsletter_lists/{newsletterListId}"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("newsletterListId", request.NewsletterListId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NewsletterListResponse>(),
            Update2Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
