using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Rendex.Core;
using Rendex.Core.Authentication;
using Rendex.Core.Exceptions;
using Rendex.Core.Models;
using Rendex.Core.Request;
using Rendex.Core.Response;
using Rendex.Errors;
using Rendex.Models;
using Rendex.Requests.Screenshot;

namespace Rendex.Api;

/// <summary>
/// Capture webpage screenshots
/// </summary>
public sealed class Screenshot
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Screenshot(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Mint a signed hosted-render URL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1RenderLinkResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateRenderLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a self-contained, signed URL you can paste straight into
    /// `` (or an ``). No backend or storage
    /// on your side: <c>GET /v1/render</c> renders it on the first request, caches
    /// the result in R2 under a deterministic key, and serves the cached copy
    /// on every repeat — so a widely-shared link costs one render, not one per
    /// crawl. The link encodes the (signed, tamper-proof) render params, the
    /// owning account, and an expiry. Credits are charged to the link owner on
    /// each cache-miss render only.
    /// </remarks>
    public Task<V1RenderLinkResponse> CreateRenderLink(CreateRenderLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/render/link"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1RenderLinkResponse>(),
            CreateRenderLinkError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Extract clean content from a URL
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ExtractResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ExtractContentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Turns a single URL into clean reader-mode content — Markdown, JSON, or
    /// article HTML — pulled from the fully-rendered page (so it works on
    /// JavaScript-heavy sites). Text only; for image + text in one call use
    /// <c>POST /v1/screenshot/json</c> with <c>extract: true</c>.
    /// </remarks>
    public Task<V1ExtractResponse> ExtractContent(ExtractContentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/extract"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1ExtractResponse>(),
            ExtractContentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Capture screenshot via query parameters
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetScreenshotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the screenshot as a binary image. Supports `` embedding
    /// and browser-based access. All POST parameters are accepted as query params.
    /// Accepts API key via <c>Authorization: Bearer</c>, <c>x-api-key</c> header, or <c>?key=</c> query param.
    /// </remarks>
    public Task<BinaryContent> GetScreenshot(GetScreenshotRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/screenshot"),
            [],
            [
                new Param("url", request.Url),
                new Param("format", request.Format),
                new Param("width", request.Width),
                new Param("height", request.Height),
                new Param("fullPage", request.FullPage),
                new Param("quality", request.Quality),
                new Param("delay", request.Delay),
                new Param("darkMode", request.DarkMode),
                new Param("deviceScaleFactor", request.DeviceScaleFactor),
                new Param("blockAds", request.BlockAds),
                new Param("timeout", request.Timeout),
                new Param("waitUntil", request.WaitUntil),
                new Param("waitForSelector", request.WaitForSelector),
                new Param("bestAttempt", request.BestAttempt),
                new Param("selector", request.Selector),
                new Param("device", request.Device),
                new Param("blockCookieBanners", request.BlockCookieBanners),
                new Param("resizeWidth", request.ResizeWidth),
                new Param("resizeHeight", request.ResizeHeight),
                new Param("key", request.Key),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            GetScreenshotError.Response,
            AuthScheme.Any(_auth.BearerAuth, _auth.ApiKeyHeader, _auth.ApiKeyQuery),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Capture screenshot (returns image binary)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostScreenshotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Accepts a JSON body with capture parameters. Returns the screenshot as a
    /// binary image with metadata in response headers (<c>x-screenshot-*</c>, <c>x-rendex-*</c>).
    /// </remarks>
    public Task<BinaryContent> PostScreenshot(PostScreenshotRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/screenshot"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            BinaryResponse.Instance,
            PostScreenshotError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Capture screenshot (returns base64 JSON)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ScreenshotJsonResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostScreenshotJsonError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Same capture parameters as <c>POST /v1/screenshot</c>, but returns the image
    /// as a base64-encoded string inside a JSON envelope with full metadata.
    /// </remarks>
    public Task<ScreenshotJsonResponse> PostScreenshotJson(PostScreenshotJsonRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/screenshot/json"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ScreenshotJsonResponse>(),
            PostScreenshotJsonError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Render a branded PDF + PNG artifact from Markdown or HTML
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1ArtifactResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RenderArtifactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// One call that turns Markdown or HTML plus a small branding theme into a
    /// branded PDF, a PNG, and a hosted share page — built for AI agents and
    /// ChatGPT apps that produce a finished document and need a downloadable,
    /// shareable result. Pass the document body in <c>content</c> (Markdown by
    /// default, or set <c>inputFormat: html</c>), an optional <c>branding</c> theme
    /// (logo, accent color, font, header, footer), and an optional <c>pageSetup</c>
    /// (paper size, orientation, margins, scale, viewport). Choose the output
    /// <c>formats</c> — <c>pdf</c>, <c>png</c>, or both. Each requested format charges 1
    /// credit from the same shared pool as the rendering endpoints, drawn with
    /// the same <c>rdx_</c> key; the full charge is refunded on a render failure.
    /// The response returns short-lived signed URLs for each rendered format
    /// plus a <c>shareUrl</c> to a hosted preview page; all expire after <c>expiresIn</c>
    /// seconds (default 24h).
    /// </remarks>
    public Task<V1ArtifactResponse> RenderArtifact(RenderArtifactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/artifact"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V1ArtifactResponse>(),
            RenderArtifactError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Serve a signed render link
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ServeRenderLinkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Public endpoint — the HMAC signature in the URL is the auth boundary (no
    /// API key). Renders on the first hit and returns the image/PDF bytes;
    /// subsequent hits serve the cached copy. Normally you don't call this
    /// directly — embed the URL returned by <c>POST /v1/render/link</c>. The
    /// <c>x-rendex-cache</c> response header is <c>hit</c> or <c>miss</c>.
    /// </remarks>
    public Task<BinaryContent> ServeRenderLink(ServeRenderLinkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/render"),
            [],
            [
                new Param("p", request.P),
                new Param("uid", request.Uid),
                new Param("exp", request.Exp),
                new Param("sig", request.Sig),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            ServeRenderLinkError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
