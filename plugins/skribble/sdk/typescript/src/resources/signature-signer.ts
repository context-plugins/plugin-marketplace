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
  signatureResponseV3InternalSchema,
  type SignatureResponseV3,
} from "../models/signature-response-v3.js";
import {
  signatureRecipientModelInternalSchema,
  type SignatureRecipientModel,
} from "../models/unions/signature-recipient-model.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for managing signers on a signature request.
 */
export class SignatureSigner {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Add an individual signer
   *
   * @remarks
   * Adds an individual signer to the `SignatureRequest` with the ID `SR_ID`. Use `account_email` to
   * invite a signer with an existing Skribble account, or `signer_identity_data` to invite a
   * No-Account-Signer (NAS).
   *
   * > **Good to know** > We recommend combining `signer_identity_data` and `account_email` when >
   * you are unsure whether the user has a Skribble account. If a matching > account exists, the
   * user will find the `SignatureRequest` in the > **To sign** section of their account on
   * my.skribble.com. > > If you invite them using only `signer_identity_data`, the document will >
   * not appear in their Skribble account even if one exists — they will need > to access it via the
   * link in their invitation email.
   *
   * @returns OK
   *
   * @throws {@link SignatureSigner.AddSignatureSignerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  addSignatureSigner(
    request: SignatureSigner.AddSignatureSignerRequest,
    options?: RequestOptions,
  ): ApiPromise<SignatureResponseV3, SignatureSigner.AddSignatureSignerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultSkribbleSignatureSignerApi(
          "/signature-requests/{SR_ID}/signatures",
        ),
        auth: this.#auth.bearer,
        pathParams: [{ name: "SR_ID", value: request.srId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: signatureRecipientModelInternalSchema },
      },
      {
        success: { kind: "json", schema: signatureResponseV3InternalSchema },
        errorFactory: SignatureSigner.AddSignatureSignerError,
      },
      options,
    );
  }

  /**
   * Remove an individual signer
   *
   * @remarks
   * Removes an individual signer from the `SignatureRequest`. Provide the SignatureRequest ID
   * `SR_ID` and the Signature ID `SID` of the signer to remove.
   *
   * @returns OK
   *
   * @throws {@link SignatureSigner.RemoveSignatureSignerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  removeSignatureSigner(
    request: SignatureSigner.RemoveSignatureSignerRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, SignatureSigner.RemoveSignatureSignerError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultSkribbleSignatureSignerApi(
          "/signature-requests/{SR_ID}/signatures/{SID}",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "SR_ID", value: request.srId, schema: s.string() },
          { name: "SID", value: request.sid, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: SignatureSigner.RemoveSignatureSignerError,
      },
      options,
    );
  }
}

export namespace SignatureSigner {
  export type AddSignatureSignerRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Request body to add a Signer */
    body: SignatureRecipientModel;
  };

  export class AddSignatureSignerError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<AddSignatureSignerError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type RemoveSignatureSignerRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /** Unique ID of the signer */
    sid: string;
  };

  export class RemoveSignatureSignerError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<RemoveSignatureSignerError> = [
      { on: 400, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 401, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}
