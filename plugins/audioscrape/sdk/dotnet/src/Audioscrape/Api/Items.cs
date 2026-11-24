using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Audioscrape.Core;
using Audioscrape.Core.Exceptions;
using Audioscrape.Core.Models;
using Audioscrape.Core.Request;
using Audioscrape.Core.Response;
using Audioscrape.Errors;
using Audioscrape.Models;
using Audioscrape.Requests.Items;

namespace Audioscrape.Api;

/// <summary>
/// Universal audio items — podcast episodes, uploads, conference talks, anything with a transcript. The <c>source_type</c> field distinguishes formats.
/// </summary>
public sealed class Items
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Items(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get audio item
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EpisodeDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetItemError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns one item — podcast episode, upload, or any other source type. Heavy fields (transcript, entities) are opt-in via <c>?include=</c>. Equivalent to <c>GET /api/episodes/{id}</c> for podcast episodes, but works uniformly across all content types.
    /// </remarks>
    public Task<EpisodeDetail> GetItem(GetItemRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/items/{item_id}"),
            [new TemplateParam("item_id", request.ItemId)],
            [new Param("include", request.Include)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<EpisodeDetail>(),
            GetItemError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get item transcript
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Transcript"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetItemTranscriptError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the transcript on its own — segments + speaker list — for any item, regardless of source type.
    /// </remarks>
    public Task<Transcript> GetItemTranscript(GetItemTranscriptRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/items/{item_id}/transcript"),
            [new TemplateParam("item_id", request.ItemId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Transcript>(),
            GetItemTranscriptError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List audio items
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ItemList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListItemsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Universal listing across content types — podcast episodes, uploads, and future formats. Filter by <c>source_type</c>, <c>dataset_id</c>, or <c>library</c> (slug). Results are newest-first. Use this in place of <c>/api/episodes</c> when your integration needs to work with multiple content types.
    /// </remarks>
    public Task<ItemList> ListItems(ListItemsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/items"),
            [],
            [
                new Param("source_type", request.SourceType),
                new Param("dataset_id", request.DatasetId),
                new Param("library", request.Library),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ItemList>(),
            ListItemsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload audio into a dataset
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="UploadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UploadItemExternalError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Two intake modes:
    /// • <c>Content-Type: multipart/form-data</c> — form fields <c>audio</c> (file), optional <c>title</c>, <c>description</c>
    /// • <c>Content-Type: application/json</c> — <c>{ "audio_url": "https://...", "title": "...", "description": "..." }</c>
    /// <para>
    /// JSON mode is the natural fit when the audio is already hosted (S3 presigned URL, CDN, your own server).
    /// Multipart is the natural fit for client-side files (browser uploads, scripts streaming local files).
    /// Both modes converge on the same storage + transcription pipeline; the resulting item is identical.
    /// Transcription minutes consumed count against your plan's monthly quota (see <c>/api/me/usage</c>).
    /// After upload, fetch full metadata at <c>GET /api/items/{item_id}</c> once transcription completes.
    /// </para>
    /// <para>
    /// ## Constraints
    /// </para>
    /// <para>
    /// • <b>File size:</b> Free tier is hard-capped at <b>400 MB</b> per audio upload regardless of dataset config (<b>1 GB</b> for video and for containers intake re-wraps — amr, 3gp, wma, aiff, caf, mpeg — since only the extracted audio is kept). Paid plans honour the dataset's <c>max_file_size_mb</c> (default 500 MB). Exceeding the cap returns <c>413 Payload Too Large</c>; JSON-mode <c>audio_url</c> is fetched under the same cap. (The MCP connector's <c>transcribe_audio</c> link path and the web paste-a-link import fetch in the pipeline without a byte cap.)
    /// • <b>URL-fetch safety (JSON mode):</b> <c>audio_url</c> must use <c>https://</c>. URLs that resolve to private, link-local, loopback, or otherwise internal IP ranges are rejected (SSRF guard) with <c>422 Unprocessable Entity</c>.
    /// • <b>Dataset configuration:</b> The target dataset must have <c>content_type = 'uploads'</c>. Datasets backed by RSS feeds or other source types return <c>409 Conflict</c>.
    /// </para>
    /// </remarks>
    public Task<UploadResponse> UploadItemExternal(UploadItemExternalRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/datasets/{id}/items"),
            [new TemplateParam("id", request.Id)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<UploadResponse>(),
            UploadItemExternalError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
