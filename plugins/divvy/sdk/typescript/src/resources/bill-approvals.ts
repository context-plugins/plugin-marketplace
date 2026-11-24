import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  billApprovalPolicyRequestDtoSchema,
  type BillApprovalPolicyRequestDto,
} from "../models/bill-approval-policy-request-dto.js";
import {
  billApprovalPolicyResponseDtoSchema,
  type BillApprovalPolicyResponseDto,
} from "../models/bill-approval-policy-response-dto.js";
import {
  billApproveDenyActionRequestDtoSchema,
  type BillApproveDenyActionRequestDto,
} from "../models/bill-approve-deny-action-request-dto.js";
import {
  listBillUserApprovalsResponseDtoSchema,
  type ListBillUserApprovalsResponseDto,
} from "../models/list-bill-user-approvals-response-dto.js";
import { statusDtoSchema, type StatusDto } from "../models/status-dto.js";
import type { Servers } from "../servers.js";

export class BillApprovals {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Approve or deny a bill
   *
   * @remarks
   * Approve or deny a bill. Approved bills can be paid. In the request, create an array of objects,
   * where each object represents a single bill along with its approval or denial status.
   *
   * @returns Approve or deny a bill response
   *
   * @throws {@link BillApprovals.BillApproveDenyActionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  billApproveDenyActions(
    request: BillApprovals.BillApproveDenyActionsRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusDto, BillApprovals.BillApproveDenyActionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/bill-approvals/actions"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.array(s.lazy(() => billApproveDenyActionRequestDtoSchema)),
        },
      },
      {
        success: { kind: "json", schema: statusDtoSchema },
        errorFactory: BillApprovals.BillApproveDenyActionsError,
      },
      options,
    );
  }

  /**
   * Create a bill approval policy
   *
   * @remarks
   * Create a new bill approval policy.
   *
   * In your request, set `rules` and `approvers` in the specified format. For example, to create a
   * bill approval policy for all bills greater than or equal to `$1000`, set `rules` for
   * `BILL_AMOUNT`.
   * ```
   * {
   * "policyName": "Approval policy for bills >= $1000",
   * "rules": [
   * {
   * "key": "BILL_AMOUNT",
   * "op": "gte",
   * "values": [
   * "1000"
   * ]
   * }
   * ],
   * "approvers": [
   * "{approver_user_id}"
   * ]
   * }
   * ```
   *
   * @returns Create a bill approval policy response
   *
   * @throws {@link BillApprovals.CreateBillApprovalPolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createBillApprovalPolicy(
    request: BillApprovals.CreateBillApprovalPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<BillApprovalPolicyResponseDto, BillApprovals.CreateBillApprovalPolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/bill-approvals/policies"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: billApprovalPolicyRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: billApprovalPolicyResponseDtoSchema },
        errorFactory: BillApprovals.CreateBillApprovalPolicyError,
      },
      options,
    );
  }

  /**
   * Delete a bill approval policy
   *
   * @remarks
   * Delete an existing bill approval policy. A deleted approval policy cannot be restored. The
   * deleted policy is not available in the list of approval policies.
   *
   * @returns Delete a bill approval policy response
   *
   * @throws {@link BillApprovals.DeletePolicyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePolicy(
    request: BillApprovals.DeletePolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<StatusDto, BillApprovals.DeletePolicyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/bill-approvals/policies/{policyId}"),
        auth: noneAuth,
        pathParams: [{ name: "policyId", value: request.policyId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: statusDtoSchema },
        errorFactory: BillApprovals.DeletePolicyError,
      },
      options,
    );
  }

  /**
   * Get list of bill approval policies
   *
   * @remarks
   * Get a list of bill approval policy objects.
   *
   * @returns Get list of bill approval policies response
   *
   * @throws {@link BillApprovals.ListBillApprovalPoliciesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBillApprovalPolicies(
    request: BillApprovals.ListBillApprovalPoliciesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BillApprovalPolicyResponseDto[], BillApprovals.ListBillApprovalPoliciesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/bill-approvals/policies"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => billApprovalPolicyResponseDtoSchema)) },
        errorFactory: BillApprovals.ListBillApprovalPoliciesError,
      },
      options,
    );
  }

  /**
   * Get list of bills pending approval
   *
   * @remarks
   * Get a list of bills that are pending approval by a user. In the response, you get the list of
   * bills that are pending approval for the currently signed-in user.
   *
   * @returns Get list of bills pending approval response
   *
   * @throws {@link BillApprovals.ListBillUserApprovalsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listBillUserApprovals(
    request: BillApprovals.ListBillUserApprovalsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListBillUserApprovalsResponseDto, BillApprovals.ListBillUserApprovalsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/bill-approvals/pending-user-approvals"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listBillUserApprovalsResponseDtoSchema },
        errorFactory: BillApprovals.ListBillUserApprovalsError,
      },
      options,
    );
  }

  /**
   * Update a bill approval policy
   *
   * @remarks
   * Update an existing bill approval policy.
   *
   * @returns Update a bill approval policy response
   *
   * @throws {@link BillApprovals.UpdateBillApprovalPolicyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateBillApprovalPolicy(
    request: BillApprovals.UpdateBillApprovalPolicyRequest,
    options?: RequestOptions,
  ): ApiPromise<BillApprovalPolicyResponseDto, BillApprovals.UpdateBillApprovalPolicyError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/v3/bill-approvals/policies/{policyId}"),
        auth: noneAuth,
        pathParams: [{ name: "policyId", value: request.policyId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: billApprovalPolicyRequestDtoSchema },
      },
      {
        success: { kind: "json", schema: billApprovalPolicyResponseDtoSchema },
        errorFactory: BillApprovals.UpdateBillApprovalPolicyError,
      },
      options,
    );
  }
}

export namespace BillApprovals {
  export type BillApproveDenyActionsRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: BillApproveDenyActionRequestDto[];
  };

  export class BillApproveDenyActionsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<BillApproveDenyActionsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateBillApprovalPolicyRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: BillApprovalPolicyRequestDto;
  };

  export class CreateBillApprovalPolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateBillApprovalPolicyError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type DeletePolicyRequest = {
    policyId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const deletePolicyRequestSchema: Schema<DeletePolicyRequest> = s.lazySchema(() =>
    s.object<DeletePolicyRequest>({
      policyId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class DeletePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeletePolicyError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListBillApprovalPoliciesRequest = {
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class ListBillApprovalPoliciesError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBillApprovalPoliciesError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type ListBillUserApprovalsRequest = {
    sessionId?: string | null;
    devKey?: string | null;
  };

  export class ListBillUserApprovalsError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListBillUserApprovalsError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type UpdateBillApprovalPolicyRequest = {
    policyId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: BillApprovalPolicyRequestDto;
  };

  export const updateBillApprovalPolicyRequestSchema: Schema<UpdateBillApprovalPolicyRequest> = s.lazySchema(
    () =>
      s.object<UpdateBillApprovalPolicyRequest>({
        policyId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: billApprovalPolicyRequestDtoSchema,
      }),
  );

  export class UpdateBillApprovalPolicyError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateBillApprovalPolicyError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
