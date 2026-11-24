using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FacebookBusinessManager.Core;
using FacebookBusinessManager.Core.Exceptions;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Request;
using FacebookBusinessManager.Core.Response;
using FacebookBusinessManager.Errors;
using FacebookBusinessManager.Models;
using FacebookBusinessManager.Requests.Videos;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Upload and manage videos on a Facebook Page.
/// </summary>
public sealed class Videos
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Videos(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Upload a page video
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadPageVideoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uploads a video to the Facebook Page. Supports direct upload via URL or resumable upload for large files.
    /// </remarks>
    public Task<CreateResponse> UploadPageVideo(UploadPageVideoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{page_id}/videos"),
            [new TemplateParam("page_id", request.PageId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResponse>(),
            UploadPageVideoError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
