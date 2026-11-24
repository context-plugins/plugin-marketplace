import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createLabelParamsInternalSchema, type CreateLabelParams } from "../models/create-label-params.js";
import { epicSlimInternalSchema, type EpicSlim } from "../models/epic-slim.js";
import { labelInternalSchema, type Label } from "../models/label.js";
import { storySlimInternalSchema, type StorySlim } from "../models/story-slim.js";
import { updateLabelInternalSchema, type UpdateLabel } from "../models/update-label.js";
import type { Servers } from "../servers.js";

export class Labels {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Label
   *
   * @remarks
   * Create Label allows you to create a new Label in Shortcut.
   *
   * @returns Resource
   *
   * @throws {@link Labels.CreateLabelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createLabel(
    request: Labels.CreateLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<Label, Labels.CreateLabelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v3/labels"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createLabelParamsInternalSchema },
      },
      {
        success: { kind: "json", schema: labelInternalSchema },
        errorFactory: Labels.CreateLabelError,
      },
      options,
    );
  }

  /**
   * Delete Label
   *
   * @remarks
   * Delete Label can be used to delete any Label.
   *
   * @returns No Content
   *
   * @throws {@link Labels.DeleteLabelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLabel(
    request: Labels.DeleteLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, Labels.DeleteLabelError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v3/labels/{label-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "label-public-id", value: request.labelPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Labels.DeleteLabelError,
      },
      options,
    );
  }

  /**
   * Get Label
   *
   * @remarks
   * Get Label returns information about the selected Label.
   *
   * @returns Resource
   *
   * @throws {@link Labels.GetLabelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLabel(
    request: Labels.GetLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<Label, Labels.GetLabelError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/labels/{label-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "label-public-id", value: request.labelPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: labelInternalSchema },
        errorFactory: Labels.GetLabelError,
      },
      options,
    );
  }

  /**
   * List Label Epics
   *
   * @remarks
   * List all of the Epics with the Label.
   *
   * @returns Resource
   *
   * @throws {@link Labels.ListLabelEpicsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLabelEpics(
    request: Labels.ListLabelEpicsRequest,
    options?: RequestOptions,
  ): ApiPromise<EpicSlim[], Labels.ListLabelEpicsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/labels/{label-public-id}/epics"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "label-public-id", value: request.labelPublicId, schema: s.int() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => epicSlimInternalSchema)) },
        errorFactory: Labels.ListLabelEpicsError,
      },
      options,
    );
  }

  /**
   * List Label Stories
   *
   * @remarks
   * List all of the Stories with the Label.
   *
   * @returns Resource
   *
   * @throws {@link Labels.ListLabelStoriesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLabelStories(
    request: Labels.ListLabelStoriesRequest,
    options?: RequestOptions,
  ): ApiPromise<StorySlim[], Labels.ListLabelStoriesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/labels/{label-public-id}/stories"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "label-public-id", value: request.labelPublicId, schema: s.int() }],
        query: [
          {
            name: "includes_description",
            value: request.includesDescription,
            schema: s.optional(s.boolean()),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => storySlimInternalSchema)) },
        errorFactory: Labels.ListLabelStoriesError,
      },
      options,
    );
  }

  /**
   * List Labels
   *
   * @remarks
   * List Labels returns a list of all Labels and their attributes.
   *
   * @returns Resource
   *
   * @throws {@link Labels.ListLabelsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listLabels(
    request: Labels.ListLabelsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Label[], Labels.ListLabelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v3/labels"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [{ name: "slim", value: request.slim, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => labelInternalSchema)) },
        errorFactory: Labels.ListLabelsError,
      },
      options,
    );
  }

  /**
   * Update Label
   *
   * @remarks
   * Update Label allows you to replace a Label name with another name. If you try to name a Label
   * something that already exists, you will receive a 422 response.
   *
   * @returns Resource
   *
   * @throws {@link Labels.UpdateLabelError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ShortcutError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateLabel(
    request: Labels.UpdateLabelRequest,
    options?: RequestOptions,
  ): ApiPromise<Label, Labels.UpdateLabelError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v3/labels/{label-public-id}"),
        auth: this.#auth.apiToken,
        pathParams: [{ name: "label-public-id", value: request.labelPublicId, schema: s.int() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateLabelInternalSchema },
      },
      {
        success: { kind: "json", schema: labelInternalSchema },
        errorFactory: Labels.UpdateLabelError,
      },
      options,
    );
  }
}

export namespace Labels {
  export type CreateLabelRequest = {
    /** Request parameters for creating a Label on a Shortcut Story. */
    body: CreateLabelParams;
  };

  export class CreateLabelError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLabelError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type DeleteLabelRequest = {
    /** The unique ID of the Label. */
    labelPublicId: number;
  };

  export class DeleteLabelError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLabelError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type GetLabelRequest = {
    /** The unique ID of the Label. */
    labelPublicId: number;
  };

  export class GetLabelError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLabelError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListLabelEpicsRequest = {
    /** The unique ID of the Label. */
    labelPublicId: number;
  };

  export class ListLabelEpicsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLabelEpicsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListLabelStoriesRequest = {
    /** The unique ID of the Label. */
    labelPublicId: number;
    /** A true/false boolean indicating whether to return Stories with their descriptions. */
    includesDescription?: boolean;
  };

  export class ListLabelStoriesError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLabelStoriesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type ListLabelsRequest = {
    /** A true/false boolean indicating if the slim versions of the Label should be returned. */
    slim?: boolean;
  };

  export class ListLabelsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListLabelsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }

  export type UpdateLabelRequest = {
    /** The unique ID of the Label you wish to update. */
    labelPublicId: number;
    body: UpdateLabel;
  };

  export class UpdateLabelError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLabelError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
    ];
  }
}
