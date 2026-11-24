using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Cosmic.Core;
using Cosmic.Core.Exceptions;
using Cosmic.Core.Models;
using Cosmic.Core.Request;
using Cosmic.Core.Response;
using Cosmic.Errors;
using Cosmic.Models;
using Cosmic.Requests.MediaApi;

namespace Cosmic.Api;

/// <summary>
/// Media are the images, files, and documents in a Bucket. Upload is served by workers.cosmicjs.com and is not part of this document.
/// </summary>
public sealed class MediaApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal MediaApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a media item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteMediaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a media item from the Bucket. The file is removed from storage and the CDN caches are purged, so its URL stops working. Objects and Metafields that reference the media are not updated automatically: clear those references yourself. This is destructive and not reversible through the API.
    /// </remarks>
    public Task<MessageResponse> DeleteMedia(DeleteMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/media/{media_id}"),
            [new TemplateParam("slug", request.Slug), new TemplateParam("media_id", request.MediaId)],
            [new Param("trigger_webhook", request.TriggerWebhook)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            DeleteMediaError.Response,
            _auth.WriteKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a media item by id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MediaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMediaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single media item by its id. To fetch by file name instead, query the media list endpoint with <c>query={"name":"..."}</c>.
    /// </remarks>
    public Task<MediaResponse> GetMedia(GetMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/media/{media_id}"),
            [new TemplateParam("slug", request.Slug), new TemplateParam("media_id", request.MediaId)],
            [
                new Param("read_key", request.ReadKey),
                new Param("props", request.Props),
                new Param("useCache", request.UseCache),
                new Param("pretty", request.Pretty),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MediaResponse>(),
            GetMediaError.Response,
            _auth.ReadKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List and query media
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MediaListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListMediaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Query media in the Bucket. This is also how you fetch a single media item by name: pass <c>query={"name":"7f9403a32f29-toucan.jpg"}</c>.
    /// <para>
    /// The <c>name</c> of a media item is the value you assign to a File or Image Metafield when creating or updating an Object. Upload is not part of this host: <c>POST /v3/buckets/{slug}/media</c> is served by <c>https://workers.cosmicjs.com</c>.
    /// </para>
    /// </remarks>
    public Task<MediaListResponse> ListMedia(ListMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/media"),
            [new TemplateParam("slug", request.Slug)],
            [
                new Param("read_key", request.ReadKey),
                new Param("query", request.Query),
                new Param("props", request.Props),
                new Param("sort", request.Sort),
                new Param("limit", request.Limit),
                new Param("skip", request.Skip),
                new Param("useCache", request.UseCache),
                new Param("pretty", request.Pretty),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<MediaListResponse>(),
            ListMediaError.Response,
            _auth.ReadKey,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update media metadata
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MediaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateMediaError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update the folder, alt text, or user metadata on a media item. The underlying file is not replaced: to change the file, upload a new one via <c>https://workers.cosmicjs.com</c> and repoint the referencing Metafields.
    /// </remarks>
    public Task<MediaResponse> UpdateMedia(UpdateMediaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/buckets/{slug}/media/{media_id}"),
            [new TemplateParam("slug", request.Slug), new TemplateParam("media_id", request.MediaId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<MediaResponse>(),
            UpdateMediaError.Response,
            _auth.WriteKey,
            requestOptions,
            cancellationToken);
}
