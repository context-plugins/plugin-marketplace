using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Skribble.Core;
using Skribble.Core.Authentication;
using Skribble.Core.Exceptions;
using Skribble.Core.Models;
using Skribble.Core.Request;
using Skribble.Core.Response;
using Skribble.Errors;
using Skribble.Models;
using Skribble.Requests.SendTo;

namespace Skribble.Api;

/// <summary>
/// Endpoints for the Send-To signing flow.
/// </summary>
public sealed class SendTo
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal SendTo(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Create a Send-To Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateSendToResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSendToError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Starts the signing process by uploading the PDF document <c>content</c> and
    /// assigning it a <c>title</c>.
    /// <para>
    /// ### Limited lifetime
    /// </para>
    /// <para>
    /// &gt; Send-To objects and their related Documents and SignatureRequests are only
    /// &gt; guaranteed for a <b>limited lifetime</b>.
    /// &gt;
    /// &gt; - A Send-To request that is not claimed by a user — i.e. where a user
    /// &gt; does not add the document to their list of documents to sign — is
    /// &gt; deleted automatically after one day.
    /// &gt;
    /// &gt; - All Send-To objects and their related Documents and SignatureRequest
    /// &gt; objects, regardless of status, are deleted automatically after 90 days.
    /// </para>
    /// </remarks>
    public Task<CreateSendToResponse> CreateSendTo(CreateSendToOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSendToApi("/sendto"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            FormRequest.Create(
                new MultipartParam("title", request.Title),
                new MultipartParam("content", request.Content)),
            JsonResponse.Create<CreateSendToResponse>(),
            CreateSendToError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a Send-To Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSendToError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// To call the <c>delete</c> endpoint, you must include the value of the
    /// <c>access_code</c> field—received when creating the <c>Send-To</c> object—in the
    /// request header <c>X-Accesscode</c>.
    /// <para>
    /// This call deletes the involved <c>Send-To</c>, <c>Document</c>, and <c>SignatureRequest</c>
    /// objects regardless of the current <c>Send-To</c> state.
    /// </para>
    /// </remarks>
    public Task DeleteSendTo(DeleteSendToRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSendToApi("/sendto/{SEND_TO_ID}"),
            [new TemplateParam("SEND_TO_ID", request.SendToId)],
            [],
            [new HeaderParam("X-Accesscode", request.XAccesscode), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteSendToError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Download Send-To Document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BinaryContent"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DownloadSendToError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// To call the <c>download</c> endpoint, you must include the value of the
    /// <c>access_code</c> field—received when creating the <c>Send-To</c> object—in the
    /// request header <c>X-Accesscode</c>.
    /// <para>
    /// The response contains the originally provided PDF document in its current
    /// state, which may be signed, declined, withdrawn, or still open for signing.
    /// The current status can be retrieved using the <c>track</c> endpoint.
    /// </para>
    /// </remarks>
    public Task<BinaryContent> DownloadSendTo(DownloadSendToRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSendToApi("/sendto/{SEND_TO_ID}/download"),
            [new TemplateParam("SEND_TO_ID", request.SendToId)],
            [],
            [new HeaderParam("X-Accesscode", request.XAccesscode)],
            HttpMethod.Get,
            EmptyBody.Instance,
            BinaryResponse.Instance,
            DownloadSendToError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Track a Send-To Request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="TrackSendToResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="TrackSendToError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// To call the <c>track</c> endpoint, you must include the value of the
    /// <c>access_code</c> field—received when creating the <c>Send-To</c> object—in the
    /// request header <c>X-Accesscode</c>.
    /// </remarks>
    public Task<TrackSendToResponse> TrackSendTo(TrackSendToRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultSkribbleSendToApi("/sendto/{SEND_TO_ID}/track"),
            [new TemplateParam("SEND_TO_ID", request.SendToId)],
            [],
            [new HeaderParam("X-Accesscode", request.XAccesscode)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<TrackSendToResponse>(),
            TrackSendToError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
