using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Shortcut.Core;
using Shortcut.Core.Exceptions;
using Shortcut.Core.Models;
using Shortcut.Core.Request;
using Shortcut.Core.Response;
using Shortcut.Errors;
using Shortcut.Models;
using Shortcut.Requests.StoryLinks;

namespace Shortcut.Api;

public sealed class StoryLinks
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal StoryLinks(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Story Link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoryLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStoryLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Story Links (called Story Relationships in the UI) allow you create semantic relationships between two stories. The parameters read like an active voice grammatical sentence: subject -&gt; verb -&gt; object.
    /// <para>
    /// The subject story acts on the object Story; the object story is the direct object of the sentence.
    /// </para>
    /// <para>
    /// The subject story "blocks", "duplicates", or "relates to" the object story. Examples:
    /// - "story 5 blocks story 6” -- story 6 is now "blocked" until story 5 is moved to a Done workflow state.
    /// - "story 2 duplicates story 1” -- Story 2 represents the same body of work as Story 1 (and should probably be archived).
    /// - "story 7 relates to story 3”
    /// </para>
    /// </remarks>
    public Task<StoryLink> CreateStoryLink(CreateStoryLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/story-links"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StoryLink>(),
            CreateStoryLinkError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Story Link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteStoryLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Removes the relationship between the stories for the given Story Link.
    /// </remarks>
    public Task DeleteStoryLink(DeleteStoryLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/story-links/{story-link-public-id}"),
            [new TemplateParam("story-link-public-id", request.StoryLinkPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteStoryLinkError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Story Link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoryLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStoryLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the stories and their relationship for the given Story Link.
    /// </remarks>
    public Task<StoryLink> GetStoryLink(GetStoryLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/story-links/{story-link-public-id}"),
            [new TemplateParam("story-link-public-id", request.StoryLinkPublicId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StoryLink>(),
            GetStoryLinkError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Story Link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StoryLink"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateStoryLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the stories and/or the relationship for the given Story Link.
    /// </remarks>
    public Task<StoryLink> UpdateStoryLink(UpdateStoryLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v3/story-links/{story-link-public-id}"),
            [new TemplateParam("story-link-public-id", request.StoryLinkPublicId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StoryLink>(),
            UpdateStoryLinkError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
