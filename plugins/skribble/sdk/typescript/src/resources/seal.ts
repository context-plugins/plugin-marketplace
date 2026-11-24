import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { createSealRequestSchema, type CreateSealRequest } from "../models/create-seal-request.js";
import { createSealResponseSchema, type CreateSealResponse } from "../models/create-seal-response.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for applying electronic seals to documents.
 */
export class Seal {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Seal a Document with a Legal Entity Signature
   *
   * @remarks
   * Uploads a document and affixes an electronic seal in a single call.
   *
   * Optionally, a visual signature can also be placed on the document.
   *
   * The response contains the `document_id` of the newly created sealed document, which can be used
   * to retrieve it.
   *
   * @returns OK
   *
   * @throws {@link Seal.SealDocumentError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  sealDocument(
    request: Seal.SealDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateSealResponse, Seal.SealDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleSealApi("/seal"),
        auth: this.#auth.bearer,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createSealRequestSchema },
      },
      {
        success: { kind: "json", schema: createSealResponseSchema },
        errorFactory: Seal.SealDocumentError,
      },
      options,
    );
  }
}

export namespace Seal {
  export type SealDocumentRequest = {
    /** Content base64-encoded in a JSON object */
    body: CreateSealRequest;
  };

  export class SealDocumentError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Declared<"problem7", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<SealDocumentError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 406, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem7", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}
