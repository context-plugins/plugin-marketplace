import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import {
  configurationManagerAiModelsAvailableResponseSchema,
  type ConfigurationManagerAiModelsAvailableResponse,
} from "../models/configuration-manager-ai-models-available-response.js";
import {
  configurationManagerAiModelsAvailable400Error1Schema,
  type ConfigurationManagerAiModelsAvailable400Error1,
} from "../models/configuration-manager-ai-models-available400-error1.js";
import {
  configurationManagerAiModelsAvailable401Error1Schema,
  type ConfigurationManagerAiModelsAvailable401Error1,
} from "../models/configuration-manager-ai-models-available401-error1.js";
import {
  configurationManagerAiModelsAvailable403Error1Schema,
  type ConfigurationManagerAiModelsAvailable403Error1,
} from "../models/configuration-manager-ai-models-available403-error1.js";
import {
  configurationManagerAiModelsAvailable500Error1Schema,
  type ConfigurationManagerAiModelsAvailable500Error1,
} from "../models/configuration-manager-ai-models-available500-error1.js";
import { modelTypeSchema, type ModelType } from "../models/model-type.js";
import type { Servers } from "../servers.js";

/**
 * Manage individual AI model providers - add, update, delete, and set defaults.
 */
export class AiModelsProviders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get available models by type
   *
   * @remarks
   * Returns a **flattened list** of individual AI models of the requested type, suitable for use in
   * selection dropdowns and model-picker UIs.
   *
   * Each provider configuration entry may specify multiple comma-separated model names; this
   * endpoint expands those into one object per model name so callers receive a flat, enumerable
   * collection.
   *
   * **Flattening rules:**
   * - Only the **first** model in a multi-model provider entry is marked `isDefault: true`; all
   *   subsequent models from the same entry get `false`.
   * - `modelFriendlyName` is included **only** when the provider entry contains exactly one model
   *   name (not a comma-separated list).
   * - `defaultReasoningEffort` is included on every model of an entry whose
   *   `configuration.defaultReasoningEffort` (or, when that is unset, a top-level
   *   `defaultReasoningEffort`) holds a valid effort. It is left out when no default is stored.
   * - When no providers of the requested type are configured the endpoint still returns HTTP
   *   **200** with an empty `models` array — this is **not** an error.
   *
   * **Access control:** requires a valid bearer token. For OAuth tokens the `config:read` scope
   * must be present; regular JWT bearer tokens pass through without scope enforcement.
   *
   * @returns Available models retrieved successfully. An empty `models` array (with HTTP 200) is
   * returned when no providers of the requested type have been configured — treat this as a valid,
   * empty state, not an error.
   *
   * @throws {@link AiModelsProviders.GetAvailableModelsByTypeError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAvailableModelsByType(
    request: AiModelsProviders.GetAvailableModelsByTypeRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ConfigurationManagerAiModelsAvailableResponse,
    AiModelsProviders.GetAvailableModelsByTypeError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/configurationManager/ai-models/available/{modelType}"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "modelType", value: request.modelType, schema: modelTypeSchema }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: configurationManagerAiModelsAvailableResponseSchema },
        errorFactory: AiModelsProviders.GetAvailableModelsByTypeError,
      },
      options,
    );
  }
}

export namespace AiModelsProviders {
  export type GetAvailableModelsByTypeRequest = {
    /**
     * Category of AI model to retrieve.
     *
     * Must be one of: `llm`, `embedding`, `ocr`, `slm`, `reasoning`, `multiModal`,
     * `imageGeneration`, `tts`, `stt`, `decision`.
     */
    modelType: ModelType;
  };

  export class GetAvailableModelsByTypeError extends ApiError {
    declare readonly payload:
      | Declared<
          "configurationManagerAiModelsAvailable400Error1",
          ConfigurationManagerAiModelsAvailable400Error1
        >
      | Declared<
          "configurationManagerAiModelsAvailable401Error1",
          ConfigurationManagerAiModelsAvailable401Error1
        >
      | Declared<
          "configurationManagerAiModelsAvailable403Error1",
          ConfigurationManagerAiModelsAvailable403Error1
        >
      | Declared<
          "configurationManagerAiModelsAvailable500Error1",
          ConfigurationManagerAiModelsAvailable500Error1
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAvailableModelsByTypeError> = [
      {
        on: 400,
        kind: "configurationManagerAiModelsAvailable400Error1",
        decode: { kind: "json", schema: configurationManagerAiModelsAvailable400Error1Schema },
      },
      {
        on: 401,
        kind: "configurationManagerAiModelsAvailable401Error1",
        decode: { kind: "json", schema: configurationManagerAiModelsAvailable401Error1Schema },
      },
      {
        on: 403,
        kind: "configurationManagerAiModelsAvailable403Error1",
        decode: { kind: "json", schema: configurationManagerAiModelsAvailable403Error1Schema },
      },
      {
        on: 500,
        kind: "configurationManagerAiModelsAvailable500Error1",
        decode: { kind: "json", schema: configurationManagerAiModelsAvailable500Error1Schema },
      },
    ];
  }
}
