using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using S1.Core;
using S1.Core.Exceptions;
using S1.Core.Models;
using S1.Core.Request;
using S1.Core.Response;
using S1.Errors;
using S1.Requests.Screenshot;

namespace S1.Api;

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
    /// Render a web page as a PNG, JPEG, or WebP image
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ScreenshotError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Render a public webpage as a PNG, JPEG, or WebP image. Use it when appearance is the point — layout checks, visual previews, or content that does not survive text extraction — and control the viewport, when the page counts as ready, and whether to capture the full document or a single element by CSS selector. When you want the page's text instead, call POST /crawl. Costs 2 credits per request.
    /// </remarks>
    public Task<BinaryContent> ScreenshotInvoke(ScreenshotOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/screenshot"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            BinaryResponse.Instance,
            ScreenshotError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
