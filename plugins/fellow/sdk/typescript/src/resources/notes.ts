import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  appendNoteAgendaRequestSchema,
  type AppendNoteAgendaRequest,
} from "../models/append-note-agenda-request.js";
import {
  findReplaceNoteAgendaRequestInternalSchema,
  type FindReplaceNoteAgendaRequest,
} from "../models/find-replace-note-agenda-request.js";
import { getNotesRequestInternalSchema, type GetNotesRequest } from "../models/get-notes-request.js";
import { messageResponseSchema, type MessageResponse } from "../models/message-response.js";
import { noteAgendaResponseSchema, type NoteAgendaResponse } from "../models/note-agenda-response.js";
import { noteResponseSchema, type NoteResponse } from "../models/note-response.js";
import { notesListResponseSchema, type NotesListResponse } from "../models/notes-list-response.js";
import {
  prependNoteAgendaRequestSchema,
  type PrependNoteAgendaRequest,
} from "../models/prepend-note-agenda-request.js";
import {
  writeNoteAgendaRequestSchema,
  type WriteNoteAgendaRequest,
} from "../models/write-note-agenda-request.js";
import type { Servers } from "../servers.js";

/**
 * Access and manage meeting notes and their agendas. Retrieve individual notes, list notes with
 * filters and pagination, delete notes (privileged access required), or edit agenda content as
 * Fellow Markdown by replacing the whole agenda, appending or prepending to it, or finding and
 * replacing a single occurrence of text.
 */
export class Notes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Append To Note Agenda
   *
   * @remarks
   * Add Fellow Markdown to the end of a note's agenda, leaving the rest of the content in place.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiAppendNoteAgenda(
    request: Notes.AppsDeveloperApiApiAppendNoteAgendaRequest,
    options?: RequestOptions,
  ): ApiPromise<NoteAgendaResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/note/{note_id}/agenda/append"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "note_id", value: request.noteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: appendNoteAgendaRequestSchema },
      },
      {
        success: { kind: "json", schema: noteAgendaResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Delete Note
   *
   * @remarks
   * Delete a note by its ID.
   *
   * **Super Admin Access Required**: This endpoint is restricted to API keys with privileged
   * access. Only users with super admin privileges can delete notes through the API.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiDeleteNote(
    request: Notes.AppsDeveloperApiApiDeleteNoteRequest,
    options?: RequestOptions,
  ): ApiPromise<MessageResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/note/{note_id}"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "note_id", value: request.noteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: messageResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Find And Replace In Note Agenda
   *
   * @remarks
   * Replace the single occurrence of `find` in a note's agenda with Fellow Markdown.
   *
   * `find` must match exactly once. A missing or ambiguous match is a 422 and changes nothing.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiFindReplaceNoteAgenda(
    request: Notes.AppsDeveloperApiApiFindReplaceNoteAgendaRequest,
    options?: RequestOptions,
  ): ApiPromise<NoteAgendaResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/note/{note_id}/agenda/find-replace"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "note_id", value: request.noteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: findReplaceNoteAgendaRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: noteAgendaResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve Note
   *
   * @remarks
   * Retrieve a note by its ID.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiGetNoteById(
    request: Notes.AppsDeveloperApiApiGetNoteByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<NoteResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/note/{note_id}"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "note_id", value: request.noteId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: noteResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * List Notes
   *
   * @remarks
   * List notes with optional filters and pagination. Privileged access allows you to get notes for
   * the account. Non-privileged access allows you to get notes for the authenticated user only.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiGetNotes(
    request: Notes.AppsDeveloperApiApiGetNotesRequest,
    options?: RequestOptions,
  ): ApiPromise<NotesListResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/notes"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: getNotesRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: notesListResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Prepend To Note Agenda
   *
   * @remarks
   * Add Fellow Markdown to the start of a note's agenda, leaving the rest of the content in place.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiPrependNoteAgenda(
    request: Notes.AppsDeveloperApiApiPrependNoteAgendaRequest,
    options?: RequestOptions,
  ): ApiPromise<NoteAgendaResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/note/{note_id}/agenda/prepend"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "note_id", value: request.noteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: prependNoteAgendaRequestSchema },
      },
      {
        success: { kind: "json", schema: noteAgendaResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Replace Note Agenda
   *
   * @remarks
   * Write a note's agenda and/or rename the note. Provide `content_fellow_markdown`, `title`, or
   * both.
   *
   * `content_fellow_markdown` replaces the entire agenda with the provided Fellow Markdown.
   *
   * `title` renames the note, the same as renaming it in the Fellow app.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link FellowError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  appsDeveloperApiApiWriteNoteAgenda(
    request: Notes.AppsDeveloperApiApiWriteNoteAgendaRequest,
    options?: RequestOptions,
  ): ApiPromise<NoteAgendaResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/note/{note_id}/agenda"),
        auth: this.#auth.developerApiKeyAuth,
        pathParams: [{ name: "note_id", value: request.noteId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: writeNoteAgendaRequestSchema },
      },
      {
        success: { kind: "json", schema: noteAgendaResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Notes {
  export type AppsDeveloperApiApiAppendNoteAgendaRequest = {
    noteId: string;
    body: AppendNoteAgendaRequest;
  };

  export type AppsDeveloperApiApiDeleteNoteRequest = {
    noteId: string;
  };

  export type AppsDeveloperApiApiFindReplaceNoteAgendaRequest = {
    noteId: string;
    body: FindReplaceNoteAgendaRequest;
  };

  export type AppsDeveloperApiApiGetNoteByIdRequest = {
    noteId: string;
  };

  export type AppsDeveloperApiApiGetNotesRequest = {
    body: GetNotesRequest;
  };

  export type AppsDeveloperApiApiPrependNoteAgendaRequest = {
    noteId: string;
    body: PrependNoteAgendaRequest;
  };

  export type AppsDeveloperApiApiWriteNoteAgendaRequest = {
    noteId: string;
    body: WriteNoteAgendaRequest;
  };
}
