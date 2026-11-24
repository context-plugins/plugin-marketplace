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
using Beehiiv.Requests.Posts;

namespace Beehiiv.Api;

public sealed class Posts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Posts(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Get aggregate stats OAuth Scope: posts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostsAggregateStatsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AggregateStatsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve aggregate stats for all posts
    /// </remarks>
    public Task<PostsAggregateStatsResponse> AggregateStats(AggregateStatsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/posts/aggregate_stats"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("audience", request.Audience),
                new Param("platform", request.Platform),
                new Param("status", request.Status),
                new Param("content_tags[]", request.ContentTags),
                new Param("authors[]", request.Authors),
                new Param("hidden_from_feed", request.HiddenFromFeed),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PostsAggregateStatsResponse>(),
            AggregateStatsError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create post OAuth Scope: posts:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostsCreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create8Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint is available to publications on the Max and Enterprise plans.
    /// <para>
    /// Create a post for a specific publication. For a detailed walkthrough including setup, testing workflows, and working with custom HTML and templates, see the Using the Send API and Create Post Endpoint guide.
    /// </para>
    /// <para>
    /// ## Asynchronous creation
    /// </para>
    /// <para>
    /// Post creation is processed in the background. This endpoint returns <c>201</c> immediately with the post's <c>id</c>, but the post is not finished being created at that moment. The returned <c>id</c> is stable — it is the same id the post will have once creation completes.
    /// </para>
    /// <para>
    /// If you fetch the post (<c>GET /publications/{publicationId}/posts/{postId}</c>) right away, it may not exist yet. In that case the fetch returns <c>202</c> (still being created) — wait briefly and retry, honoring the <c>Retry-After</c> header. If background creation fails, the fetch returns <c>404</c> with the error code <c>POST_CREATION_FAILED</c>, so you should stop retrying, verify your request, and try creating the post again.
    /// </para>
    /// <para>
    /// ## Content methods
    /// </para>
    /// <para>
    /// There are three ways to provide content for a post. You must provide either <c>blocks</c> or <c>body_content</c>, but not both.
    /// </para>
    /// <para>
    /// ### 1. Blocks
    /// </para>
    /// <para>
    /// Use the <c>blocks</c> field to build your post with structured content blocks such as paragraphs, images, headings, buttons, tables, and more. Each block has a <c>type</c> and its own set of properties. This method gives you fine-grained control over individual content elements and supports features like visual settings, visibility settings, and dynamic content targeting.
    /// </para>
    /// <para>
    /// ### 2. Raw HTML (<c>body_content</c>)
    /// </para>
    /// <para>
    /// Use the <c>body_content</c> field to provide a single string of raw HTML. The HTML is wrapped in an <c>htmlSnippet</c> block internally. This is useful when you have pre-built HTML content or are migrating from another platform.
    /// </para>
    /// <para>
    /// ### 3. HTML blocks within blocks
    /// </para>
    /// <para>
    /// Use <c>type: html</c> blocks inside the <c>blocks</c> array to embed raw HTML snippets alongside other structured blocks. This lets you mix structured content (paragraphs, images, etc.) with custom HTML where needed.
    /// </para>
    /// <para>
    /// ## CSS and styling guardrails
    /// </para>
    /// <para>
    /// beehiiv processes all HTML content through a sanitization pipeline. When using <c>body_content</c> or <c>html</c> blocks, be aware of the following:
    /// </para>
    /// <para>
    /// - <b>`` tags are removed.</b> All `` block elements are stripped during sanitization. Do not rely on embedded stylesheets.
    /// - <b>`` tags are removed.</b> External stylesheet references are not allowed.
    /// - <b>Inline styles are preserved.</b> Styles applied directly to elements via the <c>style</c> attribute (e.g., `
    /// `) are kept intact.
    /// - <b>CSS classes have no effect.</b> While class attributes are not stripped, no corresponding stylesheets are loaded to apply them.
    /// - <b>beehiiv's email template wraps your content.</b> Your HTML is rendered inside beehiiv's email table structure, which applies its own layout and spacing. This may affect the appearance of your content.
    /// - <b>Use inline styles for all visual styling.</b> Since `` and `` tags are removed, inline styles on individual elements are the only reliable way to control appearance.
    /// </para>
    /// </remarks>
    public Task<PostsCreateResponse> Create8(Create8Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/posts"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PostsCreateResponse>(),
            Create8Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete post OAuth Scope: posts:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostProcessing"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Delete3Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete or Archive a post. Any post that has been confirmed will have it's status changed to <c>archived</c>. Posts in the <c>draft</c> status will be permanently deleted.
    /// </remarks>
    public Task<PostProcessing> Delete3(Delete3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/posts/{postId}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("postId", request.PostId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<PostProcessing>(),
            Delete3Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List posts OAuth Scope: posts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Index17Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all posts belonging to a specific publication
    /// </remarks>
    public Task<PostsListResponse> Index17(Index17Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/posts"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [
                new Param("expand", request.Expand),
                new Param("audience", request.Audience),
                new Param("platform", request.Platform),
                new Param("status", request.Status),
                new Param("content_tags[]", request.ContentTags),
                new Param("slugs[]", request.Slugs),
                new Param("authors[]", request.Authors),
                new Param("premium_tiers", request.PremiumTiers),
                new Param("limit", request.Limit),
                new Param("page", request.Page),
                new Param("order_by", request.OrderBy),
                new Param("direction", request.Direction),
                new Param("hidden_from_feed", request.HiddenFromFeed),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PostsListResponse>(),
            Index17Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Generate post preview URL OAuth Scope: posts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostsPreviewResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PreviewError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Generate a URL to preview a post as a given audience. The returned <c>preview_url</c> renders the post in the beehiiv app and requires a beehiiv session with access to the publication - it is not itself an HTML-returning endpoint.
    /// </remarks>
    public Task<PostsPreviewResponse> Preview(PreviewRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/posts/{postId}/preview"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("postId", request.PostId)],
            [
                new Param("platform", request.Platform),
                new Param("subscriber_type", request.SubscriberType),
                new Param("tier_ids", request.TierIds),
                new Param("subscriber_id", request.SubscriberId),
            ],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PostsPreviewResponse>(),
            PreviewError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get post OAuth Scope: posts:read
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostsGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Show12Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single Post belonging to a specific publication.
    /// <para>
    /// Posts created via the Send API are built asynchronously, so a recently created post may not exist yet. When the post is still being created, this endpoint returns <c>202</c> (still being created) with a <c>Retry-After</c> header — wait briefly and retry. If background creation failed, it returns <c>404</c> with the error code <c>POST_CREATION_FAILED</c>, indicating the post will never become available; verify your request and try creating it again.
    /// </para>
    /// </remarks>
    public Task<PostsGetResponse> Show12(Show12Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/posts/{postId}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("postId", request.PostId)],
            [new Param("expand", request.Expand), new Param("premium_tiers", request.PremiumTiers)],
            [new HeaderParam("Authorization", request.Authorization)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PostsGetResponse>(),
            Show12Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send test email OAuth Scope: posts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostsTestSendResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TestSendError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a test email for a specific post to one or more email addresses. Returns the number of remaining test sends for the day and the time at which the limit resets.
    /// </remarks>
    public Task<PostsTestSendResponse> TestSend(TestSendRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/posts/{postId}/test_sends"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("postId", request.PostId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PostsTestSendResponse>(),
            TestSendError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update post OAuth Scope: posts:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PostsGetResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Update3Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// This endpoint is available to publications on the Max and Enterprise plans.
    /// <para>
    /// Update an existing post for a specific publication. Only the fields provided in the request body will be updated — all other fields remain unchanged. For a detailed walkthrough of content methods and working with custom HTML, see the Using the Send API and Create Post Endpoint guide.
    /// </para>
    /// <para>
    /// To update post content, provide either <c>blocks</c> or <c>body_content</c> (not both). If neither is provided, the existing content is preserved. The same content methods and CSS guardrails described in the create endpoint apply here.
    /// </para>
    /// </remarks>
    public Task<PostsGetResponse> Update3(Update3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/posts/{postId}"),
            [new TemplateParam("publicationId", request.PublicationId), new TemplateParam("postId", request.PostId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PostsGetResponse>(),
            Update3Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
