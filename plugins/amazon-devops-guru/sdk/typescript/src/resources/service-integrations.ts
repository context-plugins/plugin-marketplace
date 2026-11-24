import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  accessDeniedExceptionSchema,
  type AccessDeniedException,
} from "../models/access-denied-exception.js";
import { conflictExceptionSchema, type ConflictException } from "../models/conflict-exception.js";
import {
  describeServiceIntegrationResponseSchema,
  type DescribeServiceIntegrationResponse,
} from "../models/describe-service-integration-response.js";
import {
  internalServerExceptionSchema,
  type InternalServerException,
} from "../models/internal-server-exception.js";
import {
  resourceNotFoundExceptionSchema,
  type ResourceNotFoundException,
} from "../models/resource-not-found-exception.js";
import {
  serviceIntegrationsRequestSchema,
  type ServiceIntegrationsRequest,
} from "../models/service-integrations-request.js";
import { throttlingExceptionSchema, type ThrottlingException } from "../models/throttling-exception.js";
import { validationExceptionSchema, type ValidationException } from "../models/validation-exception.js";
import type { Servers } from "../servers.js";

export class ServiceIntegrations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Describe Service Integration
   *
   * @remarks
   * Returns the integration status of services that are integrated with DevOps Guru. The one
   * service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which
   * can be used to create an OpsItem for each generated insight.
   *
   * @returns Success
   *
   * @throws {@link ServiceIntegrations.DescribeServiceIntegrationError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeServiceIntegration(
    options?: RequestOptions,
  ): ApiPromise<DescribeServiceIntegrationResponse, ServiceIntegrations.DescribeServiceIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/service-integrations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: describeServiceIntegrationResponseSchema },
        errorFactory: ServiceIntegrations.DescribeServiceIntegrationError,
      },
      options,
    );
  }

  /**
   * Update Service Integration
   *
   * @remarks
   * Enables or disables integration with a service that can be integrated with DevOps Guru. The one
   * service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which
   * can be used to create an OpsItem for each generated insight.
   *
   * @returns Success
   *
   * @throws {@link ServiceIntegrations.UpdateServiceIntegrationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AmazonDevOpsGuruError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateServiceIntegration(
    request: ServiceIntegrations.UpdateServiceIntegrationRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ServiceIntegrations.UpdateServiceIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/service-integrations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => serviceIntegrationsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ServiceIntegrations.UpdateServiceIntegrationError,
      },
      options,
    );
  }
}

export namespace ServiceIntegrations {
  export class DescribeServiceIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"resourceNotFoundException", ResourceNotFoundException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<DescribeServiceIntegrationError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
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
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }

  export type UpdateServiceIntegrationRequest = {
    body?: ServiceIntegrationsRequest;
  };

  export class UpdateServiceIntegrationError extends ApiError {
    declare readonly payload:
      | Declared<"accessDeniedException", AccessDeniedException>
      | Declared<"conflictException", ConflictException>
      | Declared<"internalServerException", InternalServerException>
      | Declared<"throttlingException", ThrottlingException>
      | Declared<"validationException", ValidationException>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateServiceIntegrationError> = [
      {
        on: 403,
        kind: "accessDeniedException",
        decode: { kind: "json", schema: accessDeniedExceptionSchema },
      },
      { on: 409, kind: "conflictException", decode: { kind: "json", schema: conflictExceptionSchema } },
      {
        on: 500,
        kind: "internalServerException",
        decode: { kind: "json", schema: internalServerExceptionSchema },
      },
      { on: 429, kind: "throttlingException", decode: { kind: "json", schema: throttlingExceptionSchema } },
      { on: 400, kind: "validationException", decode: { kind: "json", schema: validationExceptionSchema } },
    ];
  }
}
