import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import {
  createResourcePolicyRequestSchema,
  type CreateResourcePolicyRequest,
} from "../models/create-resource-policy-request.js";
import {
  createResourcePolicyResponseSchema,
  type CreateResourcePolicyResponse,
} from "../models/create-resource-policy-response.js";
import {
  createResourcePolicyStatementRequestSchema,
  type CreateResourcePolicyStatementRequest,
} from "../models/create-resource-policy-statement-request.js";
import {
  createResourcePolicyStatementResponseSchema,
  type CreateResourcePolicyStatementResponse,
} from "../models/create-resource-policy-statement-response.js";
import {
  deleteResourcePolicyRequestSchema,
  type DeleteResourcePolicyRequest,
} from "../models/delete-resource-policy-request.js";
import {
  deleteResourcePolicyResponseSchema,
  type DeleteResourcePolicyResponse,
} from "../models/delete-resource-policy-response.js";
import {
  deleteResourcePolicyStatementRequestSchema,
  type DeleteResourcePolicyStatementRequest,
} from "../models/delete-resource-policy-statement-request.js";
import {
  deleteResourcePolicyStatementResponseSchema,
  type DeleteResourcePolicyStatementResponse,
} from "../models/delete-resource-policy-statement-response.js";
import {
  describeResourcePolicyResponseSchema,
  type DescribeResourcePolicyResponse,
} from "../models/describe-resource-policy-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  preconditionFailedExceptionSchema,
  type PreconditionFailedException,
} from "../models/precondition-failed-exception.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  serviceQuotaExceededExceptionSchema,
  type ServiceQuotaExceededException,
} from "../models/service-quota-exceeded-exception.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import {
  updateResourcePolicyRequestSchema,
  type UpdateResourcePolicyRequest,
} from "../models/update-resource-policy-request.js";
import {
  updateResourcePolicyResponseSchema,
  type UpdateResourcePolicyResponse,
} from "../models/update-resource-policy-response.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class Policy {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create Resource Policy
   *
   * @remarks
   * Creates a new resource policy with the specified policy statements.
   *
   * @returns Success
   *
   * @throws {@link Policy.CreateResourcePolicyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createResourcePolicy(
    request: Policy.CreateResourcePolicyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateResourcePolicyResponse, Policy.CreateResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/policy/{resourceArn}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "resourceArn", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createResourcePolicyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createResourcePolicyResponseSchema },
        errorFactory: Policy.CreateResourcePolicyError,
      },
      options,
    );
  }

  /**
   * Create Resource Policy Statement
   *
   * @remarks
   * Adds a new resource policy statement to a bot or bot alias. If a resource policy exists, the
   * statement is added to the current resource policy. If a policy doesn't exist, a new policy is
   * created. You can't create a resource policy statement that allows cross-account access. You
   * need to add the CreateResourcePolicy or UpdateResourcePolicy action to the bot role in order to
   * call the API.
   *
   * @returns Success
   *
   * @throws {@link Policy.CreateResourcePolicyStatementError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createResourcePolicyStatement(
    request: Policy.CreateResourcePolicyStatementRequestParams,
    options?: RequestOptions,
  ): ApiPromise<CreateResourcePolicyStatementResponse, Policy.CreateResourcePolicyStatementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/policy/{resourceArn}/statements"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "resourceArn", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createResourcePolicyStatementRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: createResourcePolicyStatementResponseSchema },
        errorFactory: Policy.CreateResourcePolicyStatementError,
      },
      options,
    );
  }

  /**
   * Delete Resource Policy
   *
   * @remarks
   * Removes an existing policy from a bot or bot alias. If the resource doesn't have a policy
   * attached, Amazon Lex returns an exception.
   *
   * @returns Success
   *
   * @throws {@link Policy.DeleteResourcePolicyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteResourcePolicy(
    request: Policy.DeleteResourcePolicyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteResourcePolicyResponse, Policy.DeleteResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/policy/{resourceArn}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "resourceArn", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteResourcePolicyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: deleteResourcePolicyResponseSchema },
        errorFactory: Policy.DeleteResourcePolicyError,
      },
      options,
    );
  }

  /**
   * Delete Resource Policy Statement
   *
   * @remarks
   * Deletes a policy statement from a resource policy. If you delete the last statement from a
   * policy, the policy is deleted. If you specify a statement ID that doesn't exist in the policy,
   * or if the bot or bot alias doesn't have a policy attached, Amazon Lex returns an exception. You
   * need to add the DeleteResourcePolicy or UpdateResourcePolicy action to the bot role in order to
   * call the API.
   *
   * @returns Success
   *
   * @throws {@link Policy.DeleteResourcePolicyStatementError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteResourcePolicyStatement(
    request: Policy.DeleteResourcePolicyStatementRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DeleteResourcePolicyStatementResponse, Policy.DeleteResourcePolicyStatementError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi(
          "/policy/{resourceArn}/statements/{statementId}",
        ),
        auth: this.#auth.sigv4,
        pathParams: [
          { name: "resourceArn", value: request.resourceArn, schema: s.string() },
          { name: "statementId", value: request.statementId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteResourcePolicyStatementRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: deleteResourcePolicyStatementResponseSchema },
        errorFactory: Policy.DeleteResourcePolicyStatementError,
      },
      options,
    );
  }

  /**
   * Describe Resource Policy
   *
   * @remarks
   * Gets the resource policy and policy revision for a bot or bot alias.
   *
   * @returns Success
   *
   * @throws {@link Policy.DescribeResourcePolicyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  describeResourcePolicy(
    request: Policy.DescribeResourcePolicyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<DescribeResourcePolicyResponse, Policy.DescribeResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/policy/{resourceArn}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "resourceArn", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeResourcePolicyResponseSchema },
        errorFactory: Policy.DescribeResourcePolicyError,
      },
      options,
    );
  }

  /**
   * Update Resource Policy
   *
   * @remarks
   * Replaces the existing resource policy for a bot or bot alias with a new one. If the policy
   * doesn't exist, Amazon Lex returns an exception.
   *
   * @returns Success
   *
   * @throws {@link Policy.UpdateResourcePolicyError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AmazonLexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateResourcePolicy(
    request: Policy.UpdateResourcePolicyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<UpdateResourcePolicyResponse, Policy.UpdateResourcePolicyError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.defaultAmazonLexModelBuildingV2BotsApi("/policy/{resourceArn}"),
        auth: this.#auth.sigv4,
        pathParams: [{ name: "resourceArn", value: request.resourceArn, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => updateResourcePolicyRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: updateResourcePolicyResponseSchema },
        errorFactory: Policy.UpdateResourcePolicyError,
      },
      options,
    );
  }
}

export namespace Policy {
  export type CreateResourcePolicyRequestParams = {
    resourceArn: string;
    body?: CreateResourcePolicyRequest;
  };

  export class CreateResourcePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateResourcePolicyError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type CreateResourcePolicyStatementRequestParams = {
    resourceArn: string;
    body?: CreateResourcePolicyStatementRequest;
  };

  export class CreateResourcePolicyStatementError extends ApiError {
    declare readonly payload:
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateResourcePolicyStatementError> = [
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type DeleteResourcePolicyRequestParams = {
    resourceArn: string;
    body?: DeleteResourcePolicyRequest;
  };

  export class DeleteResourcePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteResourcePolicyError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
    ];
  }

  export type DeleteResourcePolicyStatementRequestParams = {
    resourceArn: string;
    statementId: string;
    body?: DeleteResourcePolicyStatementRequest;
  };

  export class DeleteResourcePolicyStatementError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteResourcePolicyStatementError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
    ];
  }

  export type DescribeResourcePolicyRequestParams = {
    resourceArn: string;
  };

  export class DescribeResourcePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeResourcePolicyError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
    ];
  }

  export type UpdateResourcePolicyRequestParams = {
    resourceArn: string;
    body?: UpdateResourcePolicyRequest;
  };

  export class UpdateResourcePolicyError extends ApiError {
    declare readonly payload:
      | Declared<"internalServerException", InternalServerException>
      | Declared<"preconditionFailedException", PreconditionFailedException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"serviceQuotaExceededException", ServiceQuotaExceededException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateResourcePolicyError> = [
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      {
        on: 412,
        kind: "preconditionFailedException",
        decode: { kind: "json", schema: preconditionFailedExceptionSchema },
      },
      {
        on: 404,
        kind: "resourceNotFoundException",
        decode: { kind: "json", schema: resourceNotFoundExceptionSchema },
      },
      {
        on: 402,
        kind: "serviceQuotaExceededException",
        decode: { kind: "json", schema: serviceQuotaExceededExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
