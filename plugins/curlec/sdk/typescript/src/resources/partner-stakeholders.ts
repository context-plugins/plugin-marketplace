import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  stakeholderRazorpayPartnerStakeholdersApiInternalSchema,
  type StakeholderRazorpayPartnerStakeholdersApi,
} from "../models/stakeholder-razorpay-partner-stakeholders-api.js";
import {
  v2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiInternalSchema,
  type V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi,
} from "../models/v2-accounts-stakeholders-request-razorpay-partner-stakeholders-api.js";
import {
  v2AccountsStakeholdersRequest1InternalSchema,
  type V2AccountsStakeholdersRequest1,
} from "../models/v2-accounts-stakeholders-request1.js";
import {
  v2AccountsStakeholdersResponseSchema,
  type V2AccountsStakeholdersResponse,
} from "../models/v2-accounts-stakeholders-response.js";
import type { Servers } from "../servers.js";

/**
 * Manage stakeholders (directors/executives) for sub-merchant accounts. Multiple stakeholders
 * allowed per account.
 */
export class PartnerStakeholders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Stakeholder
   *
   * @remarks
   * Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route
   * Linked Account. PAN 4th character must be 'P' (individual PAN).
   *
   * @returns Stakeholder created.
   *
   * @throws {@link PartnerStakeholders.CreateStakeholder2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createStakeholder2(
    request: PartnerStakeholders.CreateStakeholder2Request,
    options?: RequestOptions,
  ): ApiPromise<StakeholderRazorpayPartnerStakeholdersApi, PartnerStakeholders.CreateStakeholder2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/stakeholders"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: v2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApiInternalSchema,
        },
      },
      {
        success: { kind: "json", schema: stakeholderRazorpayPartnerStakeholdersApiInternalSchema },
        errorFactory: PartnerStakeholders.CreateStakeholder2Error,
      },
      options,
    );
  }

  /**
   * Fetch all stakeholders for an account
   *
   * @remarks
   * Retrieve all stakeholders associated with a sub-merchant account. Partners API only — Route
   * allows only 1 stakeholder per account. Authentication: OAuth access_token.
   *
   * @returns List of stakeholders
   *
   * @throws {@link PartnerStakeholders.FetchAllStakeholdersError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  fetchAllStakeholders(
    request: PartnerStakeholders.FetchAllStakeholdersRequest,
    options?: RequestOptions,
  ): ApiPromise<V2AccountsStakeholdersResponse, PartnerStakeholders.FetchAllStakeholdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/stakeholders"),
        auth: this.#auth.basicAuth,
        pathParams: [{ name: "account_id", value: request.accountId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v2AccountsStakeholdersResponseSchema },
        errorFactory: PartnerStakeholders.FetchAllStakeholdersError,
      },
      options,
    );
  }

  /**
   * Update a Stakeholder
   *
   * @remarks
   * Update stakeholder information for a Linked Account.
   *
   * @returns Stakeholder updated.
   *
   * @throws {@link PartnerStakeholders.UpdateStakeholder2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CurlecError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateStakeholder2(
    request: PartnerStakeholders.UpdateStakeholder2Request,
    options?: RequestOptions,
  ): ApiPromise<StakeholderRazorpayPartnerStakeholdersApi, PartnerStakeholders.UpdateStakeholder2Error> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}"),
        auth: anyAuth(
          this.#auth.basicAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials.forScopes("read_only"),
        ),
        pathParams: [
          { name: "account_id", value: request.accountId, schema: s.string() },
          { name: "stakeholder_id", value: request.stakeholderId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v2AccountsStakeholdersRequest1InternalSchema },
      },
      {
        success: { kind: "json", schema: stakeholderRazorpayPartnerStakeholdersApiInternalSchema },
        errorFactory: PartnerStakeholders.UpdateStakeholder2Error,
      },
      options,
    );
  }
}

export namespace PartnerStakeholders {
  export type CreateStakeholder2Request = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
    body: V2AccountsStakeholdersRequestRazorpayPartnerStakeholdersApi;
  };

  export class CreateStakeholder2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateStakeholder2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type FetchAllStakeholdersRequest = {
    /** Unique identifier of the linked merchant account (e.g. `acc_00000000000001`). */
    accountId: string;
  };

  export class FetchAllStakeholdersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<FetchAllStakeholdersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateStakeholder2Request = {
    /** Linked Account ID (acc_*). */
    accountId: string;
    /** Stakeholder ID (sth_*). */
    stakeholderId: string;
    body: V2AccountsStakeholdersRequest1;
  };

  export class UpdateStakeholder2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateStakeholder2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
