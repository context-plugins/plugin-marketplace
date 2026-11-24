import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import {
  signatureObserverResponseInternalSchema,
  type SignatureObserverResponse,
} from "../models/unions/signature-observer-response.js";
import {
  signatureObserverInternalSchema,
  type SignatureObserver,
} from "../models/unions/signature-observer.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing observers on a signature request.
 */
export class SignatureObserverApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add an observer to a signature request
   *
   * @remarks
   * Adds an observer to the specified signature request.
   *
   * Observers receive email notifications about signing progress and can view documents, but cannot
   * sign them.
   *
   * Adding a **group** observer requires the group-observers feature to be enabled for the
   * business. If it is not, the request fails with `403 Forbidden` (problem type
   * `feature-not-enabled`).
   *
   * @returns OK
   *
   * @throws {@link SignatureObserverApi.AddSignatureObserverError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addSignatureObserver(
    request: SignatureObserverApi.AddSignatureObserverRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureObserverResponse, SignatureObserverApi.AddSignatureObserverError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/signature-requests/{SR_ID}/observers"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signatureObserverInternalSchema },
      },
      {
        success: { kind: "json", schema: signatureObserverResponseInternalSchema },
        errorFactory: SignatureObserverApi.AddSignatureObserverError,
      },
      options,
    );
  }

  /**
   * Remove an observer from a signature request
   *
   * @remarks
   * Deletes the observer identified by `OBSERVER_ID` from the `SignatureRequest` with the ID
   * `SR_ID`.
   *
   * @returns OK
   *
   * @throws {@link SignatureObserverApi.DeleteSignatureObserverError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSignatureObserver(
    request: SignatureObserverApi.DeleteSignatureObserverRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SignatureObserverApi.DeleteSignatureObserverError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/signature-requests/{SR_ID}/observers/{OBSERVER_ID}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "SR_ID", value: request.srId, schema: s.string() },
          { name: "OBSERVER_ID", value: request.observerId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SignatureObserverApi.DeleteSignatureObserverError,
      },
      options,
    );
  }

  /**
   * Get an observer of a signature request
   *
   * @remarks
   * Returns the observer identified by `OBSERVER_ID` from the `SignatureRequest` with the ID
   * `SR_ID`.
   *
   * @returns OK
   *
   * @throws {@link SignatureObserverApi.GetSignatureObserverError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSignatureObserver(
    request: SignatureObserverApi.GetSignatureObserverRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureObserverResponse, SignatureObserverApi.GetSignatureObserverError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/signature-requests/{SR_ID}/observers/{OBSERVER_ID}"),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "SR_ID", value: request.srId, schema: s.string() },
          { name: "OBSERVER_ID", value: request.observerId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: signatureObserverResponseInternalSchema },
        errorFactory: SignatureObserverApi.GetSignatureObserverError,
      },
      options,
    );
  }

  /**
   * List observers of a signature request
   *
   * @remarks
   * Returns all observers added to the `SignatureRequest` with the ID `SR_ID`.
   *
   * @returns OK
   *
   * @throws {@link SignatureObserverApi.ListSignatureObserversError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSignatureObservers(
    request: SignatureObserverApi.ListSignatureObserversRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureObserverResponse[], SignatureObserverApi.ListSignatureObserversError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/signature-requests/{SR_ID}/observers"),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => signatureObserverResponseInternalSchema)) },
        errorFactory: SignatureObserverApi.ListSignatureObserversError,
      },
      options,
    );
  }
}

export namespace SignatureObserverApi {
  export type AddSignatureObserverRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Request body to create a SignatureObserver object */
    body: SignatureObserver;
  };

  export class AddSignatureObserverError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Declared<"problem7", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddSignatureObserverError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem7", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type DeleteSignatureObserverRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Unique ID returned when the Signature Observer is created. */
    observerId: string;
  };

  export class DeleteSignatureObserverError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSignatureObserverError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetSignatureObserverRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Unique ID returned when the Signature Observer is created. */
    observerId: string;
  };

  export class GetSignatureObserverError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSignatureObserverError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type ListSignatureObserversRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
  };

  export class ListSignatureObserversError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListSignatureObserversError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}
