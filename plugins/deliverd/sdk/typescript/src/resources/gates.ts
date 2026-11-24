import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1GatesCancelRequestInternalSchema,
  type ApiV1GatesCancelRequest,
} from "../models/api-v1-gates-cancel-request.js";
import {
  apiV1GatesCancelResponseSchema,
  type ApiV1GatesCancelResponse,
} from "../models/api-v1-gates-cancel-response.js";
import {
  apiV1GatesCancel403Error1Schema,
  type ApiV1GatesCancel403Error1,
} from "../models/api-v1-gates-cancel403-error1.js";
import {
  apiV1GatesCancel409Error1Schema,
  type ApiV1GatesCancel409Error1,
} from "../models/api-v1-gates-cancel409-error1.js";
import {
  apiV1GatesExecutionRequestInternalSchema,
  type ApiV1GatesExecutionRequest,
} from "../models/api-v1-gates-execution-request.js";
import {
  apiV1GatesExecutionResponseSchema,
  type ApiV1GatesExecutionResponse,
} from "../models/api-v1-gates-execution-response.js";
import {
  apiV1GatesExecution403Error1Schema,
  type ApiV1GatesExecution403Error1,
} from "../models/api-v1-gates-execution403-error1.js";
import {
  apiV1GatesExecution409Error1Schema,
  type ApiV1GatesExecution409Error1,
} from "../models/api-v1-gates-execution409-error1.js";
import {
  apiV1GatesReleaseRequestInternalSchema,
  type ApiV1GatesReleaseRequest,
} from "../models/api-v1-gates-release-request.js";
import {
  apiV1GatesReleaseResponseSchema,
  type ApiV1GatesReleaseResponse,
} from "../models/api-v1-gates-release-response.js";
import {
  apiV1GatesRelease403Error1Schema,
  type ApiV1GatesRelease403Error1,
} from "../models/api-v1-gates-release403-error1.js";
import { apiV1GatesRequestInternalSchema, type ApiV1GatesRequest } from "../models/api-v1-gates-request.js";
import { apiV1GatesResponseSchema, type ApiV1GatesResponse } from "../models/api-v1-gates-response.js";
import {
  apiV1GatesVerifyTokenRequestInternalSchema,
  type ApiV1GatesVerifyTokenRequest,
} from "../models/api-v1-gates-verify-token-request.js";
import {
  apiV1GatesVerifyTokenResponseSchema,
  type ApiV1GatesVerifyTokenResponse,
} from "../models/api-v1-gates-verify-token-response.js";
import { apiV1Gates423Error1Schema, type ApiV1Gates423Error1 } from "../models/api-v1-gates423-error1.js";
import { formatSchema, type Format } from "../models/format.js";
import type { Servers } from "../servers.js";

export class Gates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * One decision, as it stands now
   *
   * @returns While a person is deciding, `status` is `pending`; once one has, it is `approved`,
   * `rejected`, `expired` or `cancelled`, with `outcome` and `settledAt` filled in. `allowed` means
   * a rule permitted it or a person agreed to it — an expiry and a cancellation are not allowed,
   * because nobody said yes.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1GatesById(
    request: Gates.GetApiV1GatesByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1GatesResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/gates/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1GatesResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * A gate's evidence pack
   *
   * @remarks
   * The act, the policy, the scope, who was asked and under what authority, what each said, what
   * the agent reported, and in words what Deliverd did not check. `?format=csv` is the timeline
   * alone. Needs `approvals:read` as well.
   *
   * @returns The pack
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getApiV1GatesByIdEvidence(
    request: Gates.GetApiV1GatesByIdEvidenceRequest,
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/gates/{id}/evidence"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "format", value: request.format, schema: s.optional(s.lazy(() => formatSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Ask whether to proceed
   *
   * @remarks
   * Declare the action you are about to perform and the arguments you will perform it with; your
   * organisation's policy answers. Three outcomes, one field to branch on: `allowed: true` with
   * status `allowed` (a rule permitted it), `allowed: false` with status `denied` (a rule refused
   * it, and `reason` says which), or status `pending` — nobody has decided yet, an ordinary
   * approval has been raised, and `GET /gates/{id}` or the SDK's `wait()` will tell you. A denial
   * is 200, not 403: it is a result you act on, not an error — an agent told no behaved correctly
   * by asking. Fails closed throughout: an unregistered action, input its schema does not describe,
   * and a policy that cannot be read all refuse or ask a person. `externalId` is required, unlike
   * every other POST here. A random per-attempt key protects a retried HTTP request but not a
   * retried decision, and a crashed agent re-running its refund step would otherwise raise a second
   * approval for the same money — only you know which two calls are the same unit of work. An agent
   * key is welcome: registering actions and writing policy both refuse one, but an agent calling
   * this is submitting to the rule rather than writing it. Since 0087 a gate is also a scoped
   * permission: name the `destination`, the `artifact` and the `classification`, and the answer
   * carries `decision` (ALLOW, APPROVAL_REQUIRED, REVIEW_REQUIRED, DENY), `canExecute`, and the
   * window and use count of the permission. An approval covers that scope and nothing else.
   * `canExecute: true` is the organisation's authorisation only: the platform the agent runs on may
   * still ask for confirmation or refuse.
   *
   * @returns A decision already made under this `externalId`, re-read rather than raised again.
   * `reused` is true.
   *
   * @throws {@link Gates.PostApiV1GatesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1Gates(
    request: Gates.PostApiV1GatesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1GatesResponse, Gates.PostApiV1GatesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/gates"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1GatesRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1GatesResponseSchema },
        errorFactory: Gates.PostApiV1GatesError,
      },
      options,
    );
  }

  /**
   * Withdraw your own request
   *
   * @remarks
   * Withdraw a request still waiting on a person, or a permission you have not used. Only the agent
   * that asked may. A used permission cannot be withdrawn.
   *
   * @returns The gate, withdrawn
   *
   * @throws {@link Gates.PostApiV1GatesByIdCancelError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1GatesByIdCancel(
    request: Gates.PostApiV1GatesByIdCancelRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1GatesCancelResponse, Gates.PostApiV1GatesByIdCancelError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/gates/{id}/cancel"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1GatesCancelRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1GatesCancelResponseSchema },
        errorFactory: Gates.PostApiV1GatesByIdCancelError,
      },
      options,
    );
  }

  /**
   * Report what you did with a permission
   *
   * @remarks
   * `started` claims a use before you act; `completed` or `failed` finishes that claim. A
   * `completed` with no `claimId` claims and reports in one. Checked against what was authorised:
   * another artifact hash is `approval_invalidated`, another destination is `destination_mismatch`.
   * A spent, lapsed, revoked or withdrawn permission is refused with a code saying which. What you
   * report is recorded as your report: `hash_matched` when Deliverd checked the hash, `reported`
   * when there was nothing to check; `verified` is reserved for acts Deliverd performed itself.
   *
   * @returns The receipt, and the gate as it now stands
   *
   * @throws {@link Gates.PostApiV1GatesByIdExecutionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1GatesByIdExecution(
    request: Gates.PostApiV1GatesByIdExecutionRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1GatesExecutionResponse, Gates.PostApiV1GatesByIdExecutionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/gates/{id}/execution"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1GatesExecutionRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1GatesExecutionResponseSchema },
        errorFactory: Gates.PostApiV1GatesByIdExecutionError,
      },
      options,
    );
  }

  /**
   * Have Deliverd release the staged version the gate authorised
   *
   * @remarks
   * The staged report version the gate names goes live, if the gate still authorises it and the
   * report lives where the gate said. The organisation's publishing policy still applies: a hold is
   * satisfied only by a gate a person approved. The receipt is `verified` — Deliverd did it. Needs
   * `reports:write` as well.
   *
   * @returns Released
   *
   * @throws {@link Gates.PostApiV1GatesByIdReleaseError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1GatesByIdRelease(
    request: Gates.PostApiV1GatesByIdReleaseRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1GatesReleaseResponse, Gates.PostApiV1GatesByIdReleaseError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/gates/{id}/release"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1GatesReleaseRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1GatesReleaseResponseSchema },
        errorFactory: Gates.PostApiV1GatesByIdReleaseError,
      },
      options,
    );
  }

  /**
   * Check a decision token before acting on it
   *
   * @remarks
   * Whether a gate's `decisionToken` is this deployment's signature over this action and input, for
   * your organisation, and unexpired. For a call site with no verifier of its own: the TypeScript
   * and Python SDKs check locally with the key at `/.well-known/deliverd-evidence-key`. A refused
   * token is a 200 with `valid: false` and the `reason`. It does not spend a use: report the
   * execution for that.
   *
   * @returns The result
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DeliverdError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApiV1GatesVerifyToken(
    request: Gates.PostApiV1GatesVerifyTokenRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1GatesVerifyTokenResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/gates/verify-token"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => apiV1GatesVerifyTokenRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: apiV1GatesVerifyTokenResponseSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Gates {
  export type GetApiV1GatesByIdRequest = {
    /** The gate decision */
    id: string;
  };

  export type GetApiV1GatesByIdEvidenceRequest = {
    /** The gate */
    id: string;
    format?: Format;
  };

  export type PostApiV1GatesRequest = {
    body?: ApiV1GatesRequest;
  };

  export class PostApiV1GatesError extends ApiError {
    declare readonly payload: Declared<"apiV1Gates423Error1", ApiV1Gates423Error1> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1GatesError> = [
      { on: 423, kind: "apiV1Gates423Error1", decode: { kind: "json", schema: apiV1Gates423Error1Schema } },
    ];
  }

  export type PostApiV1GatesByIdCancelRequest = {
    /** The gate */
    id: string;
    body?: ApiV1GatesCancelRequest;
  };

  export class PostApiV1GatesByIdCancelError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1GatesCancel403Error1", ApiV1GatesCancel403Error1>
      | Declared<"apiV1GatesCancel409Error1", ApiV1GatesCancel409Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1GatesByIdCancelError> = [
      {
        on: 403,
        kind: "apiV1GatesCancel403Error1",
        decode: { kind: "json", schema: apiV1GatesCancel403Error1Schema },
      },
      {
        on: 409,
        kind: "apiV1GatesCancel409Error1",
        decode: { kind: "json", schema: apiV1GatesCancel409Error1Schema },
      },
    ];
  }

  export type PostApiV1GatesByIdExecutionRequest = {
    /** The gate */
    id: string;
    body?: ApiV1GatesExecutionRequest;
  };

  export class PostApiV1GatesByIdExecutionError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1GatesExecution403Error1", ApiV1GatesExecution403Error1>
      | Declared<"apiV1GatesExecution409Error1", ApiV1GatesExecution409Error1>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1GatesByIdExecutionError> = [
      {
        on: 403,
        kind: "apiV1GatesExecution403Error1",
        decode: { kind: "json", schema: apiV1GatesExecution403Error1Schema },
      },
      {
        on: 409,
        kind: "apiV1GatesExecution409Error1",
        decode: { kind: "json", schema: apiV1GatesExecution409Error1Schema },
      },
    ];
  }

  export type PostApiV1GatesByIdReleaseRequest = {
    /** The gate */
    id: string;
    body?: ApiV1GatesReleaseRequest;
  };

  export class PostApiV1GatesByIdReleaseError extends ApiError {
    declare readonly payload: Declared<"apiV1GatesRelease403Error1", ApiV1GatesRelease403Error1> | Undeclared;

    static readonly errors: ErrorDecoders<PostApiV1GatesByIdReleaseError> = [
      {
        on: 403,
        kind: "apiV1GatesRelease403Error1",
        decode: { kind: "json", schema: apiV1GatesRelease403Error1Schema },
      },
    ];
  }

  export type PostApiV1GatesVerifyTokenRequest = {
    body?: ApiV1GatesVerifyTokenRequest;
  };
}
