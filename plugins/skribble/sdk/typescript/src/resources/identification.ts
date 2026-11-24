import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  identificationEvidenceStatusResponseSchema,
  type IdentificationEvidenceStatusResponse,
} from "../models/identification-evidence-status-response.js";
import { problemInternalSchema, type Problem } from "../models/problem.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for retrieving, checking status, and downloading identification evidence collected
 * during identification.
 */
export class Identification {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Identification Evidence Files
   *
   * @remarks
   * Downloads all files related to the identification evidence as a ZIP archive.
   *
   * **Requirements:**
   * - The business must have identification evidence enabled. If it is not, the request fails with
   *   `403 Forbidden` (problem type `feature-not-enabled`).
   * - The identification process must be completed (`evidence_id` is required).
   *
   * @returns OK — ZIP archive containing all identification evidence files.
   *
   * @throws {@link Identification.GetIdentificationEvidenceFilesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIdentificationEvidenceFiles(
    request: Identification.GetIdentificationEvidenceFilesRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Identification.GetIdentificationEvidenceFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleIdentificationApi(
          "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/files",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "SR_ID", value: request.srId, schema: s.string() },
          { name: "EVIDENCE_ID", value: request.evidenceId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Identification.GetIdentificationEvidenceFilesError,
      },
      options,
    );
  }

  /**
   * Get Identification Evidence JSON
   *
   * @remarks
   * Retrieves the full identification evidence record as JSON for the given `SignatureRequest` and
   * `evidence_id`.
   *
   * **Requirements:**
   * - The business must have identification evidence enabled. If it is not, the request fails with
   *   `403 Forbidden` (problem type `feature-not-enabled`).
   * - The identification process must be completed (`evidence_id` is required).
   *
   * @returns Identification result for the completed identification process. The exact schema
   * depends on the identification provider configuration and is available on request.
   *
   * @throws {@link Identification.GetIdentificationEvidenceJsonError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIdentificationEvidenceJson(
    request: Identification.GetIdentificationEvidenceJsonRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Identification.GetIdentificationEvidenceJsonError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleIdentificationApi(
          "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "SR_ID", value: request.srId, schema: s.string() },
          { name: "EVIDENCE_ID", value: request.evidenceId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Identification.GetIdentificationEvidenceJsonError,
      },
      options,
    );
  }

  /**
   * Get Identification Evidence JWT
   *
   * @remarks
   * Retrieves the signed JWT for the identification evidence. Useful for cryptographic verification
   * or downstream integration purposes.
   *
   * **Requirements:**
   * - The business must have identification evidence enabled. If it is not, the request fails with
   *   `403 Forbidden` (problem type `feature-not-enabled`).
   * - The identification process must be completed (`evidence_id` is required).
   *
   * @returns OK
   *
   * @throws {@link Identification.GetIdentificationEvidenceJwtError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIdentificationEvidenceJwt(
    request: Identification.GetIdentificationEvidenceJwtRequest,
    options?: RequestOptions,
  ): ApiPromise<string, Identification.GetIdentificationEvidenceJwtError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleIdentificationApi(
          "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/jwt",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "SR_ID", value: request.srId, schema: s.string() },
          { name: "EVIDENCE_ID", value: request.evidenceId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "text", schema: s.string() },
        errorFactory: Identification.GetIdentificationEvidenceJwtError,
      },
      options,
    );
  }

  /**
   * Get Identification Evidence Status
   *
   * @remarks
   * Returns the current status of the identification evidence for the given `SignatureRequest` and
   * `evidence_id`.
   *
   * **Requirements:**
   * - The business must have identification evidence enabled. If it is not, the request fails with
   *   `403 Forbidden` (problem type `feature-not-enabled`).
   * - The identification process must have been initiated (`evidence_id` is required, available in
   *   `signer_identity_data.evidence_id` of the `SignatureRequest` response).
   *
   * @returns OK
   *
   * @throws {@link Identification.GetIdentificationEvidenceStatusError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link SkribbleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIdentificationEvidenceStatus(
    request: Identification.GetIdentificationEvidenceStatusRequest,
    options?: RequestOptions,
  ): ApiPromise<IdentificationEvidenceStatusResponse, Identification.GetIdentificationEvidenceStatusError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultSkribbleIdentificationApi(
          "/signature-requests/{SR_ID}/identification_evidence/{EVIDENCE_ID}/status",
        ),
        auth: this.#auth.bearer,
        pathParams: [
          { name: "SR_ID", value: request.srId, schema: s.string() },
          { name: "EVIDENCE_ID", value: request.evidenceId, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: identificationEvidenceStatusResponseSchema },
        errorFactory: Identification.GetIdentificationEvidenceStatusError,
      },
      options,
    );
  }
}

export namespace Identification {
  export type GetIdentificationEvidenceFilesRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /**
     * Unique ID of the identification evidence record, available in the
     * `signer_identity_data.evidence_id` field of the SignatureRequest response once identification
     * is complete.
     */
    evidenceId: string;
  };

  export class GetIdentificationEvidenceFilesError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIdentificationEvidenceFilesError> = [
      { on: 401, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetIdentificationEvidenceJsonRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /**
     * Unique ID of the identification evidence record, available in the
     * `signer_identity_data.evidence_id` field of the SignatureRequest response once identification
     * is complete.
     */
    evidenceId: string;
  };

  export class GetIdentificationEvidenceJsonError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIdentificationEvidenceJsonError> = [
      { on: 401, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetIdentificationEvidenceJwtRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /**
     * Unique ID of the identification evidence record, available in the
     * `signer_identity_data.evidence_id` field of the SignatureRequest response once identification
     * is complete.
     */
    evidenceId: string;
  };

  export class GetIdentificationEvidenceJwtError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIdentificationEvidenceJwtError> = [
      { on: 401, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }

  export type GetIdentificationEvidenceStatusRequest = {
    /** Unique ID received when creating the Signature Request object */
    srId: string;
    /**
     * Unique ID of the identification evidence record, available in the
     * `signer_identity_data.evidence_id` field of the SignatureRequest response once identification
     * is complete.
     */
    evidenceId: string;
  };

  export class GetIdentificationEvidenceStatusError extends ApiError {
    declare readonly payload:
      | Declared<"problem", Problem>
      | Declared<"problem2", Problem>
      | Declared<"problem3", Problem>
      | Declared<"problem4", Problem>
      | Declared<"problem5", Problem>
      | Declared<"problem6", Problem>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetIdentificationEvidenceStatusError> = [
      { on: 401, kind: "problem", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 403, kind: "problem2", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 404, kind: "problem3", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 429, kind: "problem4", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 500, kind: "problem5", decode: { kind: "json", schema: problemInternalSchema } },
      { on: 503, kind: "problem6", decode: { kind: "json", schema: problemInternalSchema } },
    ];
  }
}
