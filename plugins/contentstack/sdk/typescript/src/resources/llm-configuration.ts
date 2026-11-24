import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  createLlmConfigRequestInternalSchema,
  type CreateLlmConfigRequest,
} from "../models/create-llm-config-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { llmConfigSchema, type LlmConfig } from "../models/llm-config.js";
import type { Servers } from "../servers.js";

/**
 * LLM Configuration endpoints allow organizations to register custom API credentials for large
 * language model providers, enabling content generation through their own LLM subscriptions.
 */
export class LlmConfiguration {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Configure custom LLM credentials
   *
   * @remarks
   * Registers custom API credentials for an LLM provider to enable content generation through the
   * organization's own LLM subscription rather than Contentstack's default AI infrastructure.
   *
   * @returns LLM configuration saved successfully.
   *
   * @throws {@link LlmConfiguration.ConfigureLlmError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  configureLlm(
    request: LlmConfiguration.ConfigureLlmRequest,
    options?: RequestOptions,
  ): ApiPromise<LlmConfig, LlmConfiguration.ConfigureLlmError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi(
          "/v1/brand-kits/{brand_kit_uid}/llm-config",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "brand_kit_uid", value: request.brandKitUid, schema: s.string() }],
        query: [],
        headers: [
          { name: "organization_uid", value: request.organizationUid, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createLlmConfigRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: llmConfigSchema },
        errorFactory: LlmConfiguration.ConfigureLlmError,
      },
      options,
    );
  }

  /**
   * Get LLM configuration
   *
   * @remarks
   * Retrieves the custom LLM provider credentials configured for a Brand Kit. This allows
   * organizations to use their own LLM API subscriptions for content generation within the Brand
   * Kit.
   *
   * @returns The LLM configuration for the Brand Kit.
   *
   * @throws {@link LlmConfiguration.GetLlmConfigError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLlmConfig(
    request: LlmConfiguration.GetLlmConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<LlmConfig, LlmConfiguration.GetLlmConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackBrandKitManagementBrandKitsApi(
          "/v1/brand-kits/{brand_kit_uid}/llm-config",
        ),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.authtokenAuth),
        pathParams: [{ name: "brand_kit_uid", value: request.brandKitUid, schema: s.string() }],
        query: [],
        headers: [{ name: "organization_uid", value: request.organizationUid, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: llmConfigSchema },
        errorFactory: LlmConfiguration.GetLlmConfigError,
      },
      options,
    );
  }
}

export namespace LlmConfiguration {
  export type ConfigureLlmRequest = {
    /** The unique identifier of the Brand Kit. */
    brandKitUid: string;
    /** The unique identifier of the organization. */
    organizationUid: string;
    body: CreateLlmConfigRequest;
  };

  export class ConfigureLlmError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<ConfigureLlmError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetLlmConfigRequest = {
    /** The unique identifier of the Brand Kit. */
    brandKitUid: string;
    /** The unique identifier of the organization. */
    organizationUid: string;
  };

  export class GetLlmConfigError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetLlmConfigError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
