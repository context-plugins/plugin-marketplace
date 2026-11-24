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
using FacebookBusinessManager.Requests.AdImages;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Upload and manage images used in ad creatives.
/// </summary>
public sealed class AdImages
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AdImages(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Upload an ad image
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ActAdimagesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadAdImageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Uploads an image to the ad account image library for use in ad creatives. Accepts image file bytes.
    /// </remarks>
    public Task<ActAdimagesResponse> UploadAdImage(UploadAdImageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/act_{ad_account_id}/adimages"),
            [new TemplateParam("ad_account_id", request.AdAccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(new MultipartParam("filename", request.Filename)),
            JsonResponse.Create<ActAdimagesResponse>(),
            UploadAdImageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
