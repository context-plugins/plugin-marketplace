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
using FacebookBusinessManager.Requests.Photos;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Upload and manage photos on a Facebook Page.
/// </summary>
public sealed class Photos
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Photos(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Upload a page photo
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadPagePhotoError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uploads a photo to the Facebook Page. Can be published directly or uploaded as unpublished for later use in posts.
    /// </remarks>
    public Task<CreateResponse> UploadPagePhoto(UploadPagePhotoRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{page_id}/photos"),
            [new TemplateParam("page_id", request.PageId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateResponse>(),
            UploadPagePhotoError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
