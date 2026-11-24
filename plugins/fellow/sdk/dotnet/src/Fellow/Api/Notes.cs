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
using Fellow.Requests.Notes;

namespace Fellow.Api;

/// <summary>
/// Access and manage meeting notes and their agendas. Retrieve individual notes, list notes with filters and pagination, delete notes (privileged access required), or edit agenda content as Fellow Markdown by replacing the whole agenda, appending or prepending to it, or finding and replacing a single occurrence of text.
/// </summary>
public sealed class Notes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Notes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Append To Note Agenda
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NoteAgendaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add Fellow Markdown to the end of a note's agenda, leaving the rest of the content in place.
    /// </remarks>
    public Task<NoteAgendaResponse> AppsDeveloperApiApiAppendNoteAgenda(AppsDeveloperApiApiAppendNoteAgendaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/note/{note_id}/agenda/append"),
            [new TemplateParam("note_id", request.NoteId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NoteAgendaResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Note
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="MessageResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete a note by its ID.
    /// <para>
    /// <b>Super Admin Access Required</b>: This endpoint is restricted to API keys with privileged access.
    /// Only users with super admin privileges can delete notes through the API.
    /// </para>
    /// </remarks>
    public Task<MessageResponse> AppsDeveloperApiApiDeleteNote(AppsDeveloperApiApiDeleteNoteRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/note/{note_id}"),
            [new TemplateParam("note_id", request.NoteId)],
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
    /// Find And Replace In Note Agenda
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NoteAgendaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Replace the single occurrence of <c>find</c> in a note's agenda with Fellow Markdown.
    /// <para>
    /// <c>find</c> must match exactly once. A missing or ambiguous match is a 422 and changes nothing.
    /// </para>
    /// </remarks>
    public Task<NoteAgendaResponse> AppsDeveloperApiApiFindReplaceNoteAgenda(AppsDeveloperApiApiFindReplaceNoteAgendaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/note/{note_id}/agenda/find-replace"),
            [new TemplateParam("note_id", request.NoteId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NoteAgendaResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve Note
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NoteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a note by its ID.
    /// </remarks>
    public Task<NoteResponse> AppsDeveloperApiApiGetNoteById(AppsDeveloperApiApiGetNoteByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/note/{note_id}"),
            [new TemplateParam("note_id", request.NoteId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NoteResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Notes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NotesListResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// List notes with optional filters and pagination.
    /// Privileged access allows you to get notes for the account.
    /// Non-privileged access allows you to get notes for the authenticated user only.
    /// </remarks>
    public Task<NotesListResponse> AppsDeveloperApiApiGetNotes(AppsDeveloperApiApiGetNotesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/notes"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NotesListResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Prepend To Note Agenda
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NoteAgendaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add Fellow Markdown to the start of a note's agenda, leaving the rest of the content in place.
    /// </remarks>
    public Task<NoteAgendaResponse> AppsDeveloperApiApiPrependNoteAgenda(AppsDeveloperApiApiPrependNoteAgendaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/note/{note_id}/agenda/prepend"),
            [new TemplateParam("note_id", request.NoteId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NoteAgendaResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Replace Note Agenda
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NoteAgendaResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Write a note's agenda and/or rename the note. Provide <c>content_fellow_markdown</c>, <c>title</c>, or both.
    /// <para>
    /// <c>content_fellow_markdown</c> replaces the entire agenda with the provided Fellow Markdown.
    /// </para>
    /// <para>
    /// <c>title</c> renames the note, the same as renaming it in the Fellow app.
    /// </para>
    /// </remarks>
    public Task<NoteAgendaResponse> AppsDeveloperApiApiWriteNoteAgenda(AppsDeveloperApiApiWriteNoteAgendaRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/note/{note_id}/agenda"),
            [new TemplateParam("note_id", request.NoteId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<NoteAgendaResponse>(),
            RawErrorResponse.Instance,
            _auth.DeveloperApiKeyAuth,
            requestOptions,
            cancellationToken);
}
