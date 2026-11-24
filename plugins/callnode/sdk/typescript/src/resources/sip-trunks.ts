import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { apiV1TrunksResponseSchema, type ApiV1TrunksResponse } from "../models/api-v1-trunks-response.js";
import { apiV1TrunksResponse1Schema, type ApiV1TrunksResponse1 } from "../models/api-v1-trunks-response1.js";
import { createTrunkRequestInternalSchema, type CreateTrunkRequest } from "../models/create-trunk-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { sipTrunkSchema, type SipTrunk } from "../models/sip-trunk.js";
import { updateTrunkRequestInternalSchema, type UpdateTrunkRequest } from "../models/update-trunk-request.js";
import type { Servers } from "../servers.js";

/**
 * Create, list, update, and delete saved SIP trunks (egress BYOC + ingress).
 */
export class SipTrunks {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a SIP trunk
   *
   * @remarks
   * Creates a saved trunk. A trunk can be egress (outbound BYOC delivery to your SIP host), ingress
   * (accept inbound calls from your PBX/SBC), or both — you must supply an `egressHost` and/or one
   * or more `allowedIps`.
   *
   * Requires a verified (KYC) account. Trunks beyond your plan's included count incur your plan's
   * additional-trunk monthly fee: the first attempt returns `402
   * monthly_fee_confirmation_required`; re-submit with `confirmMonthlyFee: true` to acknowledge the
   * fee and create the trunk.
   *
   * @returns Trunk created.
   *
   * @throws {@link SipTrunks.CreateSipTrunkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createSipTrunk(
    request: SipTrunks.CreateSipTrunkRequest,
    options?: RequestOptions,
  ): ApiPromise<SipTrunk, SipTrunks.CreateSipTrunkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/trunks"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createTrunkRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: sipTrunkSchema },
        errorFactory: SipTrunks.CreateSipTrunkError,
      },
      options,
    );
  }

  /**
   * Delete a trunk
   *
   * @remarks
   * Soft-deletes the trunk. The row is retained (renamed to free the name slot) for call-detail
   * history and traceback. A trunk included in your plan (`monthlyFeeApplies: false`) can't be
   * deleted; disable it instead.
   *
   * @returns Deleted.
   *
   * @throws {@link SipTrunks.DeleteSipTrunkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSipTrunk(
    request: SipTrunks.DeleteSipTrunkRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1TrunksResponse1, SipTrunks.DeleteSipTrunkError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/trunks/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1TrunksResponse1Schema },
        errorFactory: SipTrunks.DeleteSipTrunkError,
      },
      options,
    );
  }

  /**
   * Retrieve a trunk
   *
   * @returns The trunk.
   *
   * @throws {@link SipTrunks.GetSipTrunkError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSipTrunk(
    request: SipTrunks.GetSipTrunkRequest,
    options?: RequestOptions,
  ): ApiPromise<SipTrunk, SipTrunks.GetSipTrunkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/trunks/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sipTrunkSchema },
        errorFactory: SipTrunks.GetSipTrunkError,
      },
      options,
    );
  }

  /**
   * List your SIP trunks
   *
   * @remarks
   * Returns your saved SIP trunks alongside account-level trunk settings — your plan's included
   * trunk count and additional-trunk fee, how many trunks are active, the egress source IP your
   * endpoints must allow, and the ingress endpoint your PBX/SBC points at.
   *
   * @returns Your trunks and account trunk settings.
   *
   * @throws {@link SipTrunks.ListSipTrunksError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listSipTrunks(options?: RequestOptions): ApiPromise<ApiV1TrunksResponse, SipTrunks.ListSipTrunksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/trunks"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1TrunksResponseSchema },
        errorFactory: SipTrunks.ListSipTrunksError,
      },
      options,
    );
  }

  /**
   * Rotate a registration trunk's SIP password
   *
   * @remarks
   * Generates a new SIP password for a registration trunk, keeping the same username. This is the
   * only recovery path for a lost password: CallNode stores a non-reversible digest, never the
   * plaintext.
   *
   * The new password is returned **once**, in `sipPassword`. The previous password stops working
   * within about a minute, so update your PBX promptly — it will need to re-register.
   *
   * @returns New credentials. `sipPassword` appears only in this response.
   *
   * @throws {@link SipTrunks.RotateSipTrunkCredentialsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  rotateSipTrunkCredentials(
    request: SipTrunks.RotateSipTrunkCredentialsRequest,
    options?: RequestOptions,
  ): ApiPromise<SipTrunk, SipTrunks.RotateSipTrunkCredentialsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/trunks/{id}/rotate-credentials"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: sipTrunkSchema },
        errorFactory: SipTrunks.RotateSipTrunkCredentialsError,
      },
      options,
    );
  }

  /**
   * Update a trunk
   *
   * @remarks
   * Updates any subset of a trunk's fields. Send `egressHost` as `null` or `""` to clear it and
   * make the trunk ingress-only. The same validation codes as create apply; a request with no
   * recognized fields returns `400 no_fields`.
   *
   * @returns The updated trunk.
   *
   * @throws {@link SipTrunks.UpdateSipTrunkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CallNodeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateSipTrunk(
    request: SipTrunks.UpdateSipTrunkRequest,
    options?: RequestOptions,
  ): ApiPromise<SipTrunk, SipTrunks.UpdateSipTrunkError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/trunks/{id}"),
        auth: allAuth(this.#auth.apiKeyAuth, this.#auth.timestampAuth, this.#auth.signatureAuth),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: updateTrunkRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: sipTrunkSchema },
        errorFactory: SipTrunks.UpdateSipTrunkError,
      },
      options,
    );
  }
}

export namespace SipTrunks {
  export type CreateSipTrunkRequest = {
    body: CreateTrunkRequest;
  };

  export class CreateSipTrunkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSipTrunkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 402, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteSipTrunkRequest = {
    /** The trunk's `id`. */
    id: string;
  };

  export class DeleteSipTrunkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteSipTrunkError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetSipTrunkRequest = {
    /** The trunk's `id`. */
    id: string;
  };

  export class GetSipTrunkError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetSipTrunkError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export class ListSipTrunksError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ListSipTrunksError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type RotateSipTrunkCredentialsRequest = {
    /** Trunk id. */
    id: string;
  };

  export class RotateSipTrunkCredentialsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<RotateSipTrunkCredentialsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateSipTrunkRequest = {
    /** The trunk's `id`. */
    id: string;
    body: UpdateTrunkRequest;
  };

  export class UpdateSipTrunkError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateSipTrunkError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
