import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1DisputesApproveRequestSchema,
  type ApiV1DisputesApproveRequest,
} from "../models/api-v1-disputes-approve-request.js";
import {
  apiV1DisputesChallengeRequestSchema,
  type ApiV1DisputesChallengeRequest,
} from "../models/api-v1-disputes-challenge-request.js";
import {
  apiV1DisputesProvideEvidenceRequestSchema,
  type ApiV1DisputesProvideEvidenceRequest,
} from "../models/api-v1-disputes-provide-evidence-request.js";
import {
  disputeAttachmentUploadSchema,
  type DisputeAttachmentUpload,
} from "../models/dispute-attachment-upload.js";
import { dispute1Schema, type Dispute1 } from "../models/dispute1.js";
import { disputesApproveSchema, type DisputesApprove } from "../models/disputes-approve.js";
import { disputesChallengeSchema, type DisputesChallenge } from "../models/disputes-challenge.js";
import { disputesSchema, type Disputes } from "../models/disputes.js";
import { error400Schema, type Error400 } from "../models/error400.js";
import {
  error401InvalidSecretKeySchema,
  type Error401InvalidSecretKey,
} from "../models/error401-invalid-secret-key.js";
import {
  error404DisputeNotFoundSchema,
  type Error404DisputeNotFound,
} from "../models/error404-dispute-not-found.js";
import { evidenceSchema, type Evidence } from "../models/evidence.js";
import { statusesSchema, type Statuses } from "../models/statuses.js";
import type { Servers } from "../servers.js";

/**
 * The Disputes API is designed to simplify the process of handling disputes and help merchants
 * resolve issues with customer orders more efficiently. Merchants can use this API to retrieve a
 * list of disputes, view details about a specific dispute, and approve or challenge a bunch of
 * disputes. It mirrors the functionality available in Tabby Merchant Dashboard and operates
 * exclusively with live payments using live credentials. A secret key is required for using the
 * Disputes API.
 */
export class DisputesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get dispute by id
   *
   * @remarks
   * Returns detailed information about dispute.
   *
   * @returns Success. Returns dispute info.
   *
   * @throws {@link DisputesApi.GetDisputeError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDispute(
    request: DisputesApi.GetDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<Dispute1, DisputesApi.GetDisputeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/disputes/{disputeId}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "dispute_id", value: request.disputeId, schema: s.string() },
          { name: "disputeId", value: request.disputeIdTemplate, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dispute1Schema },
        errorFactory: DisputesApi.GetDisputeError,
      },
      options,
    );
  }

  /**
   * Get disputes list
   *
   * @remarks
   * Returns list of 100 recently created disputes.
   *
   * @returns Success. Returns a list of disputes.
   *
   * @throws {@link DisputesApi.GetDisputesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDisputes(
    request: DisputesApi.GetDisputesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Disputes, DisputesApi.GetDisputesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/disputes"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "statuses", value: request.statuses, schema: s.optional(s.lazy(() => statusesSchema)) },
          { name: "created_at_gte", value: request.createdAtGte, schema: s.optional(s.string()) },
          { name: "created_at_lte", value: request.createdAtLte, schema: s.optional(s.string()) },
          { name: "page_token", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disputesSchema },
        errorFactory: DisputesApi.GetDisputesError,
      },
      options,
    );
  }

  /**
   * Provide evidence for a dispute
   *
   * @remarks
   * Provide evidence (text and/or attachments) for a dispute. Used by the merchant to submit proof
   * in response to an evidence request.
   *
   * @returns Success. Evidence was submitted for the dispute.
   *
   * @throws {@link DisputesApi.PostDisputeProvideEvidenceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDisputeProvideEvidence(
    request: DisputesApi.PostDisputeProvideEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<Evidence, DisputesApi.PostDisputeProvideEvidenceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/disputes/{disputeId}/provide-evidence"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "dispute_id", value: request.disputeId, schema: s.string() },
          { name: "disputeId", value: request.disputeIdTemplate, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1DisputesProvideEvidenceRequestSchema },
      },
      {
        success: { kind: "json", schema: evidenceSchema },
        errorFactory: DisputesApi.PostDisputeProvideEvidenceError,
      },
      options,
    );
  }

  /**
   * Approve disputes
   *
   * @remarks
   * Approve disputes (refund money to the customer). Only 20 disputes can be approved within a
   * single request.
   *
   * @returns Success. Disputes were approved.
   *
   * @throws {@link DisputesApi.PostDisputesApproveError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDisputesApprove(
    request: DisputesApi.PostDisputesApproveRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputesApprove, DisputesApi.PostDisputesApproveError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/disputes/approve"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1DisputesApproveRequestSchema },
      },
      {
        success: { kind: "json", schema: disputesApproveSchema },
        errorFactory: DisputesApi.PostDisputesApproveError,
      },
      options,
    );
  }

  /**
   * Challenge disputes
   *
   * @remarks
   * Challenge disputes (request Tabby support to take a look at the case). Only 20 disputes can be
   * challenged within a single request. Only disputes with status 'new' might be challenged.
   *
   * @returns Success. Disputes were challenged.
   *
   * @throws {@link DisputesApi.PostDisputesChallengeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postDisputesChallenge(
    request: DisputesApi.PostDisputesChallengeRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputesChallenge, DisputesApi.PostDisputesChallengeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/disputes/challenge"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1DisputesChallengeRequestSchema },
      },
      {
        success: { kind: "json", schema: disputesChallengeSchema },
        errorFactory: DisputesApi.PostDisputesChallengeError,
      },
      options,
    );
  }

  /**
   * Upload attachment
   *
   * @remarks
   * Upload an attachment. Attachment must be in PNG, JPEG or PDF format and can be up to 5
   * megabytes in size. Files larger than 5 MB are rejected.
   *
   * @returns Success. Attachment was uploaded.
   *
   * @throws {@link DisputesApi.PostUploadAttachmentError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link TabbyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postUploadAttachment(
    request: DisputesApi.PostUploadAttachmentRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputeAttachmentUpload, DisputesApi.PostUploadAttachmentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/disputes/attachments/upload"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "attachment", value: request.attachment }] },
      },
      {
        success: { kind: "json", schema: disputeAttachmentUploadSchema },
        errorFactory: DisputesApi.PostUploadAttachmentError,
      },
      options,
    );
  }
}

export namespace DisputesApi {
  export type GetDisputeRequest = {
    /** ID of the dispute. */
    disputeId: string;
    disputeIdTemplate: string;
  };

  export class GetDisputeError extends ApiError {
    declare readonly payload:
      | Declared<"error404DisputeNotFound", Error404DisputeNotFound>
      | Declared<"error401InvalidSecretKey", Error401InvalidSecretKey>
      | Declared<"error404DisputeNotFound2", Error404DisputeNotFound>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDisputeError> = [
      {
        on: 400,
        kind: "error404DisputeNotFound",
        decode: { kind: "json", schema: error404DisputeNotFoundSchema },
      },
      {
        on: 401,
        kind: "error401InvalidSecretKey",
        decode: { kind: "json", schema: error401InvalidSecretKeySchema },
      },
      {
        on: 404,
        kind: "error404DisputeNotFound2",
        decode: { kind: "json", schema: error404DisputeNotFoundSchema },
      },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type GetDisputesRequest = {
    /** Dispute status. If not set, then all statuses will be in result. */
    statuses?: Statuses;
    /** Filter disputes created after or at the specified date and time. */
    createdAtGte?: string;
    /** Filter disputes created before or at the specified date and time. */
    createdAtLte?: string;
    /**
     * To load the next page of disputed items provide page token. This code can be obtained from
     * the `next_page_token` variable in the response of dispute list. If `next_page_token` is empty
     * in response, it means last page of disputes has been reached.
     */
    pageToken?: string;
  };

  export class GetDisputesError extends ApiError {
    declare readonly payload:
      | Declared<"error404DisputeNotFound", Error404DisputeNotFound>
      | Declared<"error401InvalidSecretKey", Error401InvalidSecretKey>
      | Declared<"error404", string>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDisputesError> = [
      {
        on: 400,
        kind: "error404DisputeNotFound",
        decode: { kind: "json", schema: error404DisputeNotFoundSchema },
      },
      {
        on: 401,
        kind: "error401InvalidSecretKey",
        decode: { kind: "json", schema: error401InvalidSecretKeySchema },
      },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type PostDisputeProvideEvidenceRequest = {
    /** ID of the dispute. */
    disputeId: string;
    disputeIdTemplate: string;
    body: ApiV1DisputesProvideEvidenceRequest;
  };

  export class PostDisputeProvideEvidenceError extends ApiError {
    declare readonly payload:
      | Declared<"error404DisputeNotFound", Error404DisputeNotFound>
      | Declared<"error401InvalidSecretKey", Error401InvalidSecretKey>
      | Declared<"error404DisputeNotFound2", Error404DisputeNotFound>
      | Declared<"error400", Error400>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostDisputeProvideEvidenceError> = [
      {
        on: 400,
        kind: "error404DisputeNotFound",
        decode: { kind: "json", schema: error404DisputeNotFoundSchema },
      },
      {
        on: 401,
        kind: "error401InvalidSecretKey",
        decode: { kind: "json", schema: error401InvalidSecretKeySchema },
      },
      {
        on: 404,
        kind: "error404DisputeNotFound2",
        decode: { kind: "json", schema: error404DisputeNotFoundSchema },
      },
      { on: 409, kind: "error400", decode: { kind: "json", schema: error400Schema } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type PostDisputesApproveRequest = {
    body: ApiV1DisputesApproveRequest;
  };

  export class PostDisputesApproveError extends ApiError {
    declare readonly payload:
      | Declared<"error404DisputeNotFound", Error404DisputeNotFound>
      | Declared<"error401InvalidSecretKey", Error401InvalidSecretKey>
      | Declared<"error404", string>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostDisputesApproveError> = [
      {
        on: 400,
        kind: "error404DisputeNotFound",
        decode: { kind: "json", schema: error404DisputeNotFoundSchema },
      },
      {
        on: 401,
        kind: "error401InvalidSecretKey",
        decode: { kind: "json", schema: error401InvalidSecretKeySchema },
      },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type PostDisputesChallengeRequest = {
    body: ApiV1DisputesChallengeRequest;
  };

  export class PostDisputesChallengeError extends ApiError {
    declare readonly payload:
      | Declared<"error404DisputeNotFound", Error404DisputeNotFound>
      | Declared<"error401InvalidSecretKey", Error401InvalidSecretKey>
      | Declared<"error404", string>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostDisputesChallengeError> = [
      {
        on: 400,
        kind: "error404DisputeNotFound",
        decode: { kind: "json", schema: error404DisputeNotFoundSchema },
      },
      {
        on: 401,
        kind: "error401InvalidSecretKey",
        decode: { kind: "json", schema: error401InvalidSecretKeySchema },
      },
      { on: 404, kind: "error404", decode: { kind: "json", schema: s.string() } },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }

  export type PostUploadAttachmentRequest = {
    /**
     * Attachment must be in PNG, JPEG or PDF format and can be up to 5 megabytes in size. Files
     * larger than 5 MB are rejected.
     */
    attachment: FileInput;
  };

  export class PostUploadAttachmentError extends ApiError {
    declare readonly payload:
      | Declared<"error404DisputeNotFound", Error404DisputeNotFound>
      | Declared<"error401InvalidSecretKey", Error401InvalidSecretKey>
      | Declared<"error500", string>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostUploadAttachmentError> = [
      {
        on: 400,
        kind: "error404DisputeNotFound",
        decode: { kind: "json", schema: error404DisputeNotFoundSchema },
      },
      {
        on: 401,
        kind: "error401InvalidSecretKey",
        decode: { kind: "json", schema: error401InvalidSecretKeySchema },
      },
      { on: 500, kind: "error500", decode: { kind: "json", schema: s.string() } },
    ];
  }
}
