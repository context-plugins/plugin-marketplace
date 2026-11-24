import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createDynatraceIntegrationDtoSchema,
  type CreateDynatraceIntegrationDto,
} from "../models/create-dynatrace-integration-dto.js";
import { dynatraceIntegrationSchema, type DynatraceIntegration } from "../models/dynatrace-integration.js";
import type { Servers } from "../servers.js";

export class IntegrationsDynatrace {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create or Update Organization Dynatrace Integration
   *
   * @returns Integration created/updated successfully
   *
   * @throws {@link IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dynatraceIntegrationControllerCreateIntegration(
    request: IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/integrations/dynatrace"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: createDynatraceIntegrationDtoSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: IntegrationsDynatrace.DynatraceIntegrationControllerCreateIntegrationError,
      },
      options,
    );
  }

  /**
   * Delete Dynatrace Environment
   *
   * @returns Environment deleted successfully
   *
   * @throws {@link IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dynatraceIntegrationControllerDeleteEnvironment(
    request: IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v1/integrations/dynatrace/{dynatraceEnvironmentId}"),
        auth: noneAuth,
        pathParams: [
          { name: "dynatraceEnvironmentId", value: request.dynatraceEnvironmentId, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: IntegrationsDynatrace.DynatraceIntegrationControllerDeleteEnvironmentError,
      },
      options,
    );
  }

  /**
   * Get Dynatrace Integrations
   *
   * @returns Integrations fetched successfully
   *
   * @throws {@link IntegrationsDynatrace.DynatraceIntegrationControllerGetIntegrationsError} when
   * the API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DevCycleError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  dynatraceIntegrationControllerGetIntegrations(
    options?: RequestOptions,
  ): ApiPromise<
    DynatraceIntegration,
    IntegrationsDynatrace.DynatraceIntegrationControllerGetIntegrationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/integrations/dynatrace"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: dynatraceIntegrationSchema },
        errorFactory: IntegrationsDynatrace.DynatraceIntegrationControllerGetIntegrationsError,
      },
      options,
    );
  }
}

export namespace IntegrationsDynatrace {
  export type DynatraceIntegrationControllerCreateIntegrationRequest = {
    body: CreateDynatraceIntegrationDto;
  };

  export class DynatraceIntegrationControllerCreateIntegrationError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DynatraceIntegrationControllerCreateIntegrationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }

  export type DynatraceIntegrationControllerDeleteEnvironmentRequest = {
    dynatraceEnvironmentId: string;
  };

  export class DynatraceIntegrationControllerDeleteEnvironmentError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DynatraceIntegrationControllerDeleteEnvironmentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }

  export class DynatraceIntegrationControllerGetIntegrationsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DynatraceIntegrationControllerGetIntegrationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }
}
