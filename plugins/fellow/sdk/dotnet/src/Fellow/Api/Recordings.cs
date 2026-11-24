using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Fellow.Core;
using Fellow.Core.ErrorResponse;
using Fellow.Core.Exceptions;
using Fellow.Core.Models;
using Fellow.Core.Request;
using Fellow.Core.Response;
using Fellow.Models;
using Fellow.Requests.Recordings;

namespace Fellow.Api;

/// <summary>
/// Access and manage meeting recordings. Retrieve individual recordings, list recordings with filters and pagination, or delete recordings (privileged access required).
/// </summary>
public sealed class Recordings
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Recordings(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete Recording
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a recording by its ID.
    /// <para>
    /// <b>Super Admin Access Required</b>: This endpoint is restricted to API keys with privileged access.
    /// Only users with super admin privileges can delete recordings through the API.
    /// </para>
    /// </remarks>
    public Task<MessageResponse> AppsDeveloperApiApiDeleteRecording(AppsDeveloperApiApiDeleteRecordingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/recording/{recording_id}"),
            [new TemplateParam("recording_id", request.RecordingId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<MessageResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Recording
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecordingResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a recording by its ID.
    /// </remarks>
    public Task<RecordingResponse> AppsDeveloperApiApiGetRecordingById(AppsDeveloperApiApiGetRecordingByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/recording/{recording_id}"),
            [new TemplateParam("recording_id", request.RecordingId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RecordingResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Recordings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecordingsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List recordings with optional filters and pagination.
    /// </remarks>
    public Task<RecordingsListResponse> AppsDeveloperApiApiGetRecordings(AppsDeveloperApiApiGetRecordingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/recordings"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecordingsListResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Upload
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecordingUploadResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a single API-uploaded recording with its import status.
    /// </remarks>
    public Task<RecordingUploadResponse> AppsDeveloperApiApiGetUploadById(AppsDeveloperApiApiGetUploadByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/recordings/upload/{recording_id}"),
            [new TemplateParam("recording_id", request.RecordingId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<RecordingUploadResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Uploads
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecordingUploadsListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List API-uploaded recordings with their import status, with optional filters and pagination.
    /// </remarks>
    public Task<RecordingUploadsListResponse> AppsDeveloperApiApiListUploads(AppsDeveloperApiApiListUploadsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/recordings/upload/list"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecordingUploadsListResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Upload Recording
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="RecordingUploadSubmitResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Upload a recording from a URL.
    /// </remarks>
    public Task<RecordingUploadSubmitResponse> AppsDeveloperApiApiUploadRecording(AppsDeveloperApiApiUploadRecordingRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/recordings/upload"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<RecordingUploadSubmitResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);
}
