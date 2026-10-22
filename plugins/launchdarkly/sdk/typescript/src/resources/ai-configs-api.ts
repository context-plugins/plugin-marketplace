import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { agentGraphPatchSchema, type AgentGraphPatch } from "../models/agent-graph-patch.js";
import { agentGraphPostSchema, type AgentGraphPost } from "../models/agent-graph-post.js";
import { agentGraphSchema, type AgentGraph } from "../models/agent-graph.js";
import { agentGraphsSchema, type AgentGraphs } from "../models/agent-graphs.js";
import { aiConfigPatchSchema, type AiConfigPatch } from "../models/ai-config-patch.js";
import { aiConfigPostSchema, type AiConfigPost } from "../models/ai-config-post.js";
import {
  aiConfigTargetingPatchSchema,
  type AiConfigTargetingPatch,
} from "../models/ai-config-targeting-patch.js";
import { aiConfigTargetingSchema, type AiConfigTargeting } from "../models/ai-config-targeting.js";
import {
  aiConfigVariationPatchSchema,
  type AiConfigVariationPatch,
} from "../models/ai-config-variation-patch.js";
import {
  aiConfigVariationPostSchema,
  type AiConfigVariationPost,
} from "../models/ai-config-variation-post.js";
import { aiConfigVariationSchema, type AiConfigVariation } from "../models/ai-config-variation.js";
import {
  aiConfigVariationsResponseSchema,
  type AiConfigVariationsResponse,
} from "../models/ai-config-variations-response.js";
import { aiConfigSchema, type AiConfig } from "../models/ai-config.js";
import { aiConfigsSchema, type AiConfigs } from "../models/ai-configs.js";
import { aiToolPatchSchema, type AiToolPatch } from "../models/ai-tool-patch.js";
import { aiToolPostSchema, type AiToolPost } from "../models/ai-tool-post.js";
import { aiToolSchema, type AiTool } from "../models/ai-tool.js";
import { aiToolsSchema, type AiTools } from "../models/ai-tools.js";
import { errorSchema, type Error } from "../models/error.js";
import { ldApiVersionSchema, type LdApiVersion } from "../models/ld-api-version.js";
import { metricByVariationSchema, type MetricByVariation } from "../models/metric-by-variation.js";
import { metricsSchema, type Metrics } from "../models/metrics.js";
import { modelConfigPostSchema, type ModelConfigPost } from "../models/model-config-post.js";
import { modelConfigSchema, type ModelConfig } from "../models/model-config.js";
import {
  restrictedModelsRequestSchema,
  type RestrictedModelsRequest,
} from "../models/restricted-models-request.js";
import {
  restrictedModelsResponseSchema,
  type RestrictedModelsResponse,
} from "../models/restricted-models-response.js";
import type { Servers } from "../servers.js";

/**
 * The AI Configs API allows you to create, retrieve, and edit AI Configs, AI Config variations, and
 * AI model configurations.
 *
 * An AI Config is a resource in LaunchDarkly that you can use to customize, test, and roll out new
 * large language models (LLMs) within your generative AI applications. Within each AI Config, you
 * define one or more AI Config variations, each of which includes a model configuration and one or
 * more messages. The model configuration can be a standard one from the list provided by
 * LaunchDarkly, or you can define your own custom AI model configuration.
 *
 * To learn more, read [AI Configs](https://launchdarkly.com/docs/home/ai-configs).
 */
export class AiConfigsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete AI Config
   *
   * @remarks
   * Delete an existing AI Config.
   *
   * @returns No content
   *
   * @throws {@link AiConfigsApi.DeleteAiConfigError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteAiConfig(
    request: AiConfigsApi.DeleteAiConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AiConfigsApi.DeleteAiConfigError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-configs/{configKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "configKey", value: request.configKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AiConfigsApi.DeleteAiConfigError,
      },
      options,
    );
  }

  /**
   * Delete AI Config variation
   *
   * @remarks
   * Delete a specific variation of an AI Config by config key and variation key.
   *
   * @returns No content
   *
   * @throws {@link AiConfigsApi.DeleteAiConfigVariationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteAiConfigVariation(
    request: AiConfigsApi.DeleteAiConfigVariationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AiConfigsApi.DeleteAiConfigVariationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "configKey", value: request.configKey, schema: s.string() },
          { name: "variationKey", value: request.variationKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AiConfigsApi.DeleteAiConfigVariationError,
      },
      options,
    );
  }

  /**
   * Delete AI tool
   *
   * @remarks
   * Delete an existing AI tool.
   *
   * @returns No content
   *
   * @throws {@link AiConfigsApi.DeleteAiToolError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteAiTool(
    request: AiConfigsApi.DeleteAiToolRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AiConfigsApi.DeleteAiToolError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-tools/{toolKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "toolKey", value: request.toolKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AiConfigsApi.DeleteAiToolError,
      },
      options,
    );
  }

  /**
   * Delete agent graph
   *
   * @remarks
   * Delete an existing agent graph and all of its edges.
   *
   * @returns No content
   *
   * @throws {@link AiConfigsApi.DeleteAgentGraphError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteAgentGraph(
    request: AiConfigsApi.DeleteAgentGraphRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AiConfigsApi.DeleteAgentGraphError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/agent-graphs/{graphKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "graphKey", value: request.graphKey, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AiConfigsApi.DeleteAgentGraphError,
      },
      options,
    );
  }

  /**
   * Delete an AI model config
   *
   * @remarks
   * Delete an AI model config.
   *
   * @returns No content
   *
   * @throws {@link AiConfigsApi.DeleteModelConfigError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteModelConfig(
    request: AiConfigsApi.DeleteModelConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AiConfigsApi.DeleteModelConfigError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "modelConfigKey", value: request.modelConfigKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AiConfigsApi.DeleteModelConfigError,
      },
      options,
    );
  }

  /**
   * Remove AI models from the restricted list
   *
   * @remarks
   * Remove AI models, by key, from the restricted list.
   *
   * @returns No content
   *
   * @throws {@link AiConfigsApi.DeleteRestrictedModelsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteRestrictedModels(
    request: AiConfigsApi.DeleteRestrictedModelsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AiConfigsApi.DeleteRestrictedModelsError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/ai-configs/model-configs/restricted",
        ),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: restrictedModelsRequestSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: AiConfigsApi.DeleteRestrictedModelsError,
      },
      options,
    );
  }

  /**
   * Get AI Config
   *
   * @remarks
   * Retrieve a specific AI Config by its key.
   *
   * @returns AI Config found
   *
   * @throws {@link AiConfigsApi.GetAiConfigError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAiConfig(
    request: AiConfigsApi.GetAiConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<AiConfig, AiConfigsApi.GetAiConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-configs/{configKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "configKey", value: request.configKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aiConfigSchema },
        errorFactory: AiConfigsApi.GetAiConfigError,
      },
      options,
    );
  }

  /**
   * Get AI Config metrics
   *
   * @remarks
   * Retrieve usage metrics for an AI Config by config key.
   *
   * @returns Metrics computed
   *
   * @throws {@link AiConfigsApi.GetAiConfigMetricsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAiConfigMetrics(
    request: AiConfigsApi.GetAiConfigMetricsRequest,
    options?: RequestOptions,
  ): ApiPromise<Metrics, AiConfigsApi.GetAiConfigMetricsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "configKey", value: request.configKey, schema: s.string() },
        ],
        query: [
          { name: "from", value: request.from, schema: s.int() },
          { name: "to", value: request.to, schema: s.int() },
          { name: "env", value: request.env, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: metricsSchema },
        errorFactory: AiConfigsApi.GetAiConfigMetricsError,
      },
      options,
    );
  }

  /**
   * Get AI Config metrics by variation
   *
   * @remarks
   * Retrieve usage metrics for an AI Config by config key, with results split by variation.
   *
   * @returns Metrics computed
   *
   * @throws {@link AiConfigsApi.GetAiConfigMetricsByVariationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAiConfigMetricsByVariation(
    request: AiConfigsApi.GetAiConfigMetricsByVariationRequest,
    options?: RequestOptions,
  ): ApiPromise<MetricByVariation[], AiConfigsApi.GetAiConfigMetricsByVariationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/ai-configs/{configKey}/metrics-by-variation",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "configKey", value: request.configKey, schema: s.string() },
        ],
        query: [
          { name: "from", value: request.from, schema: s.int() },
          { name: "to", value: request.to, schema: s.int() },
          { name: "env", value: request.env, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => metricByVariationSchema)) },
        errorFactory: AiConfigsApi.GetAiConfigMetricsByVariationError,
      },
      options,
    );
  }

  /**
   * Show an AI Config's targeting
   *
   * @remarks
   * Retrieves a specific AI Config's targeting by its key
   *
   * @returns Successful response
   *
   * @throws {@link AiConfigsApi.GetAiConfigTargetingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAiConfigTargeting(
    request: AiConfigsApi.GetAiConfigTargetingRequest,
    options?: RequestOptions,
  ): ApiPromise<AiConfigTargeting, AiConfigsApi.GetAiConfigTargetingError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "configKey", value: request.configKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aiConfigTargetingSchema },
        errorFactory: AiConfigsApi.GetAiConfigTargetingError,
      },
      options,
    );
  }

  /**
   * Get AI Config variation
   *
   * @remarks
   * Get an AI Config variation by key. The response includes all variation versions for the given
   * variation key.
   *
   * @returns Successful response
   *
   * @throws {@link AiConfigsApi.GetAiConfigVariationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAiConfigVariation(
    request: AiConfigsApi.GetAiConfigVariationRequest,
    options?: RequestOptions,
  ): ApiPromise<AiConfigVariationsResponse, AiConfigsApi.GetAiConfigVariationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "configKey", value: request.configKey, schema: s.string() },
          { name: "variationKey", value: request.variationKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aiConfigVariationsResponseSchema },
        errorFactory: AiConfigsApi.GetAiConfigVariationError,
      },
      options,
    );
  }

  /**
   * List AI Configs
   *
   * @remarks
   * Get a list of all AI Configs in the given project.
   *
   * @returns Successful response
   *
   * @throws {@link AiConfigsApi.GetAiConfigsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAiConfigs(
    request: AiConfigsApi.GetAiConfigsRequest,
    options?: RequestOptions,
  ): ApiPromise<AiConfigs, AiConfigsApi.GetAiConfigsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-configs"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aiConfigsSchema },
        errorFactory: AiConfigsApi.GetAiConfigsError,
      },
      options,
    );
  }

  /**
   * Get AI tool
   *
   * @remarks
   * Retrieve a specific AI tool by its key.
   *
   * @returns AI tool found
   *
   * @throws {@link AiConfigsApi.GetAiToolError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAiTool(
    request: AiConfigsApi.GetAiToolRequest,
    options?: RequestOptions,
  ): ApiPromise<AiTool, AiConfigsApi.GetAiToolError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-tools/{toolKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "toolKey", value: request.toolKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aiToolSchema },
        errorFactory: AiConfigsApi.GetAiToolError,
      },
      options,
    );
  }

  /**
   * Get agent graph
   *
   * @remarks
   * Retrieve a specific agent graph by its key, including its edges.
   *
   * @returns Agent graph found
   *
   * @throws {@link AiConfigsApi.GetAgentGraphError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAgentGraph(
    request: AiConfigsApi.GetAgentGraphRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentGraph, AiConfigsApi.GetAgentGraphError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/agent-graphs/{graphKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "graphKey", value: request.graphKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentGraphSchema },
        errorFactory: AiConfigsApi.GetAgentGraphError,
      },
      options,
    );
  }

  /**
   * Get AI model config
   *
   * @remarks
   * Get an AI model config by key.
   *
   * @returns Successful response
   *
   * @throws {@link AiConfigsApi.GetModelConfigError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getModelConfig(
    request: AiConfigsApi.GetModelConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelConfig, AiConfigsApi.GetModelConfigError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/ai-configs/model-configs/{modelConfigKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "modelConfigKey", value: request.modelConfigKey, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: modelConfigSchema },
        errorFactory: AiConfigsApi.GetModelConfigError,
      },
      options,
    );
  }

  /**
   * List AI tool versions
   *
   * @remarks
   * Get a list of all versions of an AI tool in the given project.
   *
   * @returns Successful response
   *
   * @throws {@link AiConfigsApi.ListAiToolVersionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAiToolVersions(
    request: AiConfigsApi.ListAiToolVersionsRequest,
    options?: RequestOptions,
  ): ApiPromise<AiTools, AiConfigsApi.ListAiToolVersionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-tools/{toolKey}/versions"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "toolKey", value: request.toolKey, schema: s.string() },
        ],
        query: [
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aiToolsSchema },
        errorFactory: AiConfigsApi.ListAiToolVersionsError,
      },
      options,
    );
  }

  /**
   * List AI tools
   *
   * @remarks
   * Get a list of all AI tools in the given project.
   *
   * @returns Successful response
   *
   * @throws {@link AiConfigsApi.ListAiToolsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAiTools(
    request: AiConfigsApi.ListAiToolsRequest,
    options?: RequestOptions,
  ): ApiPromise<AiTools, AiConfigsApi.ListAiToolsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-tools"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aiToolsSchema },
        errorFactory: AiConfigsApi.ListAiToolsError,
      },
      options,
    );
  }

  /**
   * List agent graphs
   *
   * @remarks
   * Get a list of all agent graphs in the given project. Returns metadata only, without edge data.
   *
   * @returns Successful response
   *
   * @throws {@link AiConfigsApi.ListAgentGraphsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listAgentGraphs(
    request: AiConfigsApi.ListAgentGraphsRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentGraphs, AiConfigsApi.ListAgentGraphsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/agent-graphs"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: agentGraphsSchema },
        errorFactory: AiConfigsApi.ListAgentGraphsError,
      },
      options,
    );
  }

  /**
   * List AI model configs
   *
   * @remarks
   * Get all AI model configs for a project.
   *
   * @returns Successful response
   *
   * @throws {@link AiConfigsApi.ListModelConfigsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listModelConfigs(
    request: AiConfigsApi.ListModelConfigsRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelConfig[], AiConfigsApi.ListModelConfigsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-configs/model-configs"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [{ name: "restricted", value: request.restricted, schema: s.optional(s.boolean()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => modelConfigSchema)) },
        errorFactory: AiConfigsApi.ListModelConfigsError,
      },
      options,
    );
  }

  /**
   * Update AI Config
   *
   * @remarks
   * Edit an existing AI Config.
   *
   * The request body must be a JSON object of the fields to update. The values you include replace
   * the existing values for the fields.
   *
   * Here's an example:
   *   ```
   *     {
   *       "description": "Example updated description",
   *       "tags": ["new-tag"]
   *     }
   *   ```
   *
   * @returns AI Config updated
   *
   * @throws {@link AiConfigsApi.PatchAiConfigError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchAiConfig(
    request: AiConfigsApi.PatchAiConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<AiConfig, AiConfigsApi.PatchAiConfigError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-configs/{configKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "configKey", value: request.configKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => aiConfigPatchSchema)) },
      },
      {
        success: { kind: "json", schema: aiConfigSchema },
        errorFactory: AiConfigsApi.PatchAiConfigError,
      },
      options,
    );
  }

  /**
   * Update AI Config targeting
   *
   * @remarks
   * Perform a partial update to an AI Config's targeting. The request body must be a valid semantic
   * patch.
   *
   * ### Using semantic patches on an AI Config
   *
   * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
   * your `Content-Type` header. To learn more, read [Updates using semantic
   * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).
   *
   * The body of a semantic patch request for updating an AI Config's targeting takes the following
   * properties:
   *
   * * `comment` (string): (Optional) A description of the update.
   * * `environmentKey` (string): The key of the LaunchDarkly environment.
   * * `instructions` (array): (Required) A list of actions the update should perform. Each action
   *   in the list must be an object with a `kind` property that indicates the instruction. If the
   *   action requires parameters, you must include those parameters as additional fields in the
   *   object. The body of a single semantic patch can contain many different instructions.
   *
   * ### Instructions
   *
   * Semantic patch requests support the following `kind` instructions for updating AI Configs.
   *
   * <details> <summary>Click to expand instructions for <strong>working with targeting and
   * variations</strong> for AI Configs</summary>
   *
   * #### addClauses
   *
   * Adds the given clauses to the rule indicated by `ruleId`.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the AI Config.
   * - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op`
   *   (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties.
   *   The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
   *
   * Here's an example:
   *
   * ```json
   * {
   *   "environmentKey": "environment-key-123abc",
   *   "instructions": [{
   *     "kind": "addClauses",
   *     "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *     "clauses": [{
   *       "contextKind": "user",
   *       "attribute": "country",
   *       "op": "in",
   *       "negate": false,
   *       "values": ["USA", "Canada"]
   *     }]
   *   }]
   * }
   * ```
   *
   * #### addRule
   *
   * Adds a new targeting rule to the AI Config. The rule may contain `clauses` and serve the
   * variation that `variationId` indicates, or serve a percentage rollout that `rolloutWeights`,
   * `rolloutBucketBy`, and `rolloutContextKind` indicate.
   *
   * If you set `beforeRuleId`, this adds the new rule before the indicated rule. Otherwise, adds
   * the new rule to the end of the list.
   *
   * ##### Parameters
   *
   * - `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op`
   *   (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties.
   *   The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
   * - `beforeRuleId`: (Optional) ID of a rule.
   * - Either
   * - `variationId`: ID of a variation.
   *
   * or
   *
   * - `rolloutWeights`: (Optional) Map of `variationId` to weight, in thousandths of a percent
   *   (0-100000).
   * - `rolloutBucketBy`: (Optional) Context attribute available in the specified
   *   `rolloutContextKind`.
   * - `rolloutContextKind`: (Optional) Context kind, defaults to `user`
   *
   * Here's an example that uses a `variationId`:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "addRule",
   *   "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
   *   "clauses": [{
   *     "contextKind": "organization",
   *     "attribute": "located_in",
   *     "op": "in",
   *     "negate": false,
   *     "values": ["Sweden", "Norway"]
   *   }]
   * }]
   * }
   * ```
   *
   * Here's an example that uses a percentage rollout:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "addRule",
   *   "clauses": [{
   *     "contextKind": "organization",
   *     "attribute": "located_in",
   *     "op": "in",
   *     "negate": false,
   *     "values": ["Sweden", "Norway"]
   *   }],
   *   "rolloutContextKind": "organization",
   *   "rolloutWeights": {
   *     "2f43f67c-3e4e-4945-a18a-26559378ca00": 15000, // serve 15% this variation
   *     "e5830889-1ec5-4b0c-9cc9-c48790090c43": 85000  // serve 85% this variation
   *   }
   * }]
   * }
   * ```
   *
   * #### addTargets
   *
   * Adds context keys to the individual context targets for the context kind that `contextKind`
   * specifies and the variation that `variationId` specifies. Returns an error if this causes the
   * AI Config to target the same context key in multiple variations.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   * - `contextKind`: (Optional) Context kind to target, defaults to `user`
   * - `variationId`: ID of a variation.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "addTargets",
   *   "values": ["context-key-123abc", "context-key-456def"],
   *   "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * }]
   * }
   * ```
   *
   * #### addValuesToClause
   *
   * Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not
   * update the context kind, attribute, or operator.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule in the AI Config.
   * - `clauseId`: ID of a clause in that rule.
   * - `values`: Array of strings, case sensitive.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "addValuesToClause",
   *   "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *   "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
   *   "values": ["beta_testers"]
   * }]
   * }
   * ```
   *
   * #### clearTargets
   *
   * Removes all individual targets from the variation that `variationId` specifies. This includes
   * both user and non-user targets.
   *
   * ##### Parameters
   *
   * - `variationId`: ID of a variation.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [ { "kind": "clearTargets", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
   * }
   * ```
   *
   * #### removeClauses
   *
   * Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule.
   * - `clauseIds`: Array of IDs of clauses in the rule.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "removeClauses",
   *   "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *   "clauseIds": ["10a58772-3121-400f-846b-b8a04e8944ed", "36a461dc-235e-4b08-97b9-73ce9365873e"]
   * }]
   * }
   * ```
   *
   * #### removeRule
   *
   * Removes the targeting rule specified by `ruleId`. Does nothing if the rule does not exist.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [ { "kind": "removeRule", "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29" } ]
   * }
   * ```
   *
   * #### removeTargets
   *
   * Removes context keys from the individual context targets for the context kind that
   * `contextKind` specifies and the variation that `variationId` specifies. Does nothing if the
   * flag does not target the context keys.
   *
   * ##### Parameters
   *
   * - `values`: List of context keys.
   * - `contextKind`: (Optional) Context kind to target, defaults to `user`
   * - `variationId`: ID of a variation.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "removeTargets",
   *   "values": ["context-key-123abc", "context-key-456def"],
   *   "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * }]
   * }
   * ```
   *
   * #### removeValuesFromClause
   *
   * Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not
   * update the context kind, attribute, or operator.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule.
   * - `clauseId`: ID of a clause in that rule.
   * - `values`: Array of strings, case sensitive.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "removeValuesFromClause",
   *   "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *   "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
   *   "values": ["beta_testers"]
   * }]
   * }
   * ```
   *
   * #### reorderRules
   *
   * Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does
   * not match the current set of rules on the AI Config.
   *
   * ##### Parameters
   *
   * - `ruleIds`: Array of IDs of all rules.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "reorderRules",
   *   "ruleIds": ["a902ef4a-2faf-4eaf-88e1-ecc356708a29", "63c238d1-835d-435e-8f21-c8d5e40b2a3d"]
   * }]
   * }
   * ```
   *
   * #### replaceRules
   *
   * Removes all targeting rules for the AI Config and replaces them with the list you provide.
   *
   * ##### Parameters
   *
   * - `rules`: A list of rules.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [
   *   {
   *     "kind": "replaceRules",
   *     "rules": [
   *       {
   *         "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
   *         "description": "My new rule",
   *         "clauses": [
   *           {
   *             "contextKind": "user",
   *             "attribute": "segmentMatch",
   *             "op": "segmentMatch",
   *             "values": ["test"]
   *           }
   *         ]
   *       }
   *     ]
   *   }
   * ]
   * }
   * ```
   *
   * #### replaceTargets
   *
   * Removes all existing targeting and replaces it with the list of targets you provide.
   *
   * ##### Parameters
   *
   * - `targets`: A list of context targeting. Each item in the list includes an optional
   *   `contextKind` that defaults to `user`, a required `variationId`, and a required list of
   *   `values`.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [
   *   {
   *     "kind": "replaceTargets",
   *     "targets": [
   *       {
   *         "contextKind": "user",
   *         "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
   *         "values": ["user-key-123abc"]
   *       },
   *       {
   *         "contextKind": "device",
   *         "variationId": "e5830889-1ec5-4b0c-9cc9-c48790090c43",
   *         "values": ["device-key-456def"]
   *       }
   *     ]
   *   }
   * ]
   * }
   * ```
   *
   * #### updateClause
   *
   * Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule.
   * - `clauseId`: ID of a clause in that rule.
   * - `clause`: New `clause` object, with `contextKind` (string), `attribute` (string), `op`
   *   (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties.
   *   The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "updateClause",
   *   "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *   "clauseId": "10c7462a-2062-45ba-a8bb-dfb3de0f8af5",
   *   "clause": {
   *     "contextKind": "user",
   *     "attribute": "country",
   *     "op": "in",
   *     "negate": false,
   *     "values": ["Mexico", "Canada"]
   *   }
   * }]
   * }
   * ```
   *
   * #### updateDefaultVariation
   *
   * Updates the default on or off variation of the AI Config.
   *
   * ##### Parameters
   *
   * - `onVariationValue`: (Optional) The value of the variation of the new on variation.
   * - `offVariationValue`: (Optional) The value of the variation of the new off variation
   *
   * Here's an example:
   *
   * ```json
   * {
   * "instructions": [ { "kind": "updateDefaultVariation", "OnVariationValue": true, "OffVariationValue": false } ]
   * }
   * ```
   *
   * #### updateFallthroughVariationOrRollout
   *
   * Updates the default or "fallthrough" rule for the AI Config, which the AI Config serves when a
   * context matches none of the targeting rules. The rule can serve either the variation that
   * `variationId` indicates, or a percentage rollout that `rolloutWeights` and `rolloutBucketBy`
   * indicate.
   *
   * ##### Parameters
   *
   * - `variationId`: ID of a variation.
   *
   * or
   *
   * - `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000).
   * - `rolloutBucketBy`: (Optional) Context attribute available in the specified
   *   `rolloutContextKind`.
   * - `rolloutContextKind`: (Optional) Context kind, defaults to `user`
   *
   * Here's an example that uses a `variationId`:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "updateFallthroughVariationOrRollout",
   *   "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * }]
   * }
   * ```
   *
   * Here's an example that uses a percentage rollout:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "updateFallthroughVariationOrRollout",
   *   "rolloutContextKind": "user",
   *   "rolloutWeights": {
   *     "2f43f67c-3e4e-4945-a18a-26559378ca00": 15000, // serve 15% this variation
   *     "e5830889-1ec5-4b0c-9cc9-c48790090c43": 85000  // serve 85% this variation
   *   }
   * }]
   * }
   * ```
   *
   * #### updateOffVariation
   *
   * Updates the default off variation to `variationId`. The AI Config serves the default off
   * variation when the AI Config's targeting is **Off**.
   *
   * ##### Parameters
   *
   * - `variationId`: ID of a variation.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [ { "kind": "updateOffVariation", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
   * }
   * ```
   *
   * #### updateRuleDescription
   *
   * Updates the description of the targeting rule.
   *
   * ##### Parameters
   *
   * - `description`: The new human-readable description for this rule.
   * - `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the AI
   *   Config.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "updateRuleDescription",
   *   "description": "New rule description",
   *   "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
   * }]
   * }
   * ```
   *
   * #### updateRuleTrackEvents
   *
   * Updates whether or not LaunchDarkly tracks events for the AI Config associated with this rule.
   *
   * ##### Parameters
   *
   * - `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the AI
   *   Config.
   * - `trackEvents`: Whether or not events are tracked.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "updateRuleTrackEvents",
   *   "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *   "trackEvents": true
   * }]
   * }
   * ```
   *
   * #### updateRuleVariationOrRollout
   *
   * Updates what `ruleId` serves when its clauses evaluate to true. The rule can serve either the
   * variation that `variationId` indicates, or a percent rollout that `rolloutWeights` and
   * `rolloutBucketBy` indicate.
   *
   * ##### Parameters
   *
   * - `ruleId`: ID of a rule.
   * - `variationId`: ID of a variation.
   *
   * or
   *
   * - `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000).
   * - `rolloutBucketBy`: (Optional) Context attribute available in the specified
   *   `rolloutContextKind`.
   * - `rolloutContextKind`: (Optional) Context kind, defaults to `user`
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [{
   *   "kind": "updateRuleVariationOrRollout",
   *   "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
   *   "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
   * }]
   * }
   * ```
   *
   * #### updateTrackEvents
   *
   * Updates whether or not LaunchDarkly tracks events for the AI Config, for all rules.
   *
   * ##### Parameters
   *
   * - `trackEvents`: Whether or not events are tracked.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [ { "kind": "updateTrackEvents", "trackEvents": true } ]
   * }
   * ```
   *
   * #### updateTrackEventsFallthrough
   *
   * Updates whether or not LaunchDarkly tracks events for the AI Config, for the default rule.
   *
   * ##### Parameters
   *
   * - `trackEvents`: Whether or not events are tracked.
   *
   * Here's an example:
   *
   * ```json
   * {
   * "environmentKey": "environment-key-123abc",
   * "instructions": [ { "kind": "updateTrackEventsFallthrough", "trackEvents": true } ]
   * }
   * ```
   * </details>
   *
   * @returns AI Config targeting updated
   *
   * @throws {@link AiConfigsApi.PatchAiConfigTargetingError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchAiConfigTargeting(
    request: AiConfigsApi.PatchAiConfigTargetingRequest,
    options?: RequestOptions,
  ): ApiPromise<AiConfigTargeting, AiConfigsApi.PatchAiConfigTargetingError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-configs/{configKey}/targeting"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "configKey", value: request.configKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => aiConfigTargetingPatchSchema)),
        },
      },
      {
        success: { kind: "json", schema: aiConfigTargetingSchema },
        errorFactory: AiConfigsApi.PatchAiConfigTargetingError,
      },
      options,
    );
  }

  /**
   * Update AI Config variation
   *
   * @remarks
   * Edit an existing variation of an AI Config. This creates a new version of the variation.
   *
   * The request body must be a JSON object of the fields to update. The values you include replace
   * the existing values for the fields.
   *
   * Here's an example:
   * ```
   *   {
   *     "messages": [
   *       {
   *         "role": "system",
   *         "content": "The new message"
   *       }
   *     ]
   *   }
   * ```
   *
   * @returns AI Config variation updated
   *
   * @throws {@link AiConfigsApi.PatchAiConfigVariationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchAiConfigVariation(
    request: AiConfigsApi.PatchAiConfigVariationRequest,
    options?: RequestOptions,
  ): ApiPromise<AiConfigVariation, AiConfigsApi.PatchAiConfigVariationError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations/{variationKey}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "configKey", value: request.configKey, schema: s.string() },
          { name: "variationKey", value: request.variationKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => aiConfigVariationPatchSchema)),
        },
      },
      {
        success: { kind: "json", schema: aiConfigVariationSchema },
        errorFactory: AiConfigsApi.PatchAiConfigVariationError,
      },
      options,
    );
  }

  /**
   * Update AI tool
   *
   * @remarks
   * Edit an existing AI tool.
   *
   * @returns AI tool updated
   *
   * @throws {@link AiConfigsApi.PatchAiToolError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchAiTool(
    request: AiConfigsApi.PatchAiToolRequest,
    options?: RequestOptions,
  ): ApiPromise<AiTool, AiConfigsApi.PatchAiToolError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-tools/{toolKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "toolKey", value: request.toolKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => aiToolPatchSchema)) },
      },
      {
        success: { kind: "json", schema: aiToolSchema },
        errorFactory: AiConfigsApi.PatchAiToolError,
      },
      options,
    );
  }

  /**
   * Update agent graph
   *
   * @remarks
   * Edit an existing agent graph.
   *
   * The request body must be a JSON object of the fields to update. The values you include replace
   * the existing values for the fields.
   *
   * If the update includes `rootConfigKey` or `edges`, both must be present and will be treated as
   * full replacements.
   *
   * @returns Agent graph updated
   *
   * @throws {@link AiConfigsApi.PatchAgentGraphError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  patchAgentGraph(
    request: AiConfigsApi.PatchAgentGraphRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentGraph, AiConfigsApi.PatchAgentGraphError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/agent-graphs/{graphKey}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "graphKey", value: request.graphKey, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => agentGraphPatchSchema)) },
      },
      {
        success: { kind: "json", schema: agentGraphSchema },
        errorFactory: AiConfigsApi.PatchAgentGraphError,
      },
      options,
    );
  }

  /**
   * Create new AI Config
   *
   * @remarks
   * Create a new AI Config within the given project.
   *
   * @returns AI Config created
   *
   * @throws {@link AiConfigsApi.PostAiConfigError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postAiConfig(
    request: AiConfigsApi.PostAiConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<AiConfig, AiConfigsApi.PostAiConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-configs"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: aiConfigPostSchema },
      },
      {
        success: { kind: "json", schema: aiConfigSchema },
        errorFactory: AiConfigsApi.PostAiConfigError,
      },
      options,
    );
  }

  /**
   * Create AI Config variation
   *
   * @remarks
   * Create a new variation for a given AI Config.
   *
   * The <code>model</code> in the request body requires a <code>modelName</code> and
   * <code>parameters</code>, for example:
   *
   * ```
   *   "model": {
   *     "modelName": "claude-3-opus-20240229",
   *     "parameters": {
   *       "max_tokens": 1024
   *     }
   *   }
   * ```
   *
   * @returns AI Config variation created
   *
   * @throws {@link AiConfigsApi.PostAiConfigVariationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postAiConfigVariation(
    request: AiConfigsApi.PostAiConfigVariationRequest,
    options?: RequestOptions,
  ): ApiPromise<AiConfigVariation, AiConfigsApi.PostAiConfigVariationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-configs/{configKey}/variations"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "configKey", value: request.configKey, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: aiConfigVariationPostSchema },
      },
      {
        success: { kind: "json", schema: aiConfigVariationSchema },
        errorFactory: AiConfigsApi.PostAiConfigVariationError,
      },
      options,
    );
  }

  /**
   * Create an AI tool
   *
   * @remarks
   * Create an AI tool
   *
   * @returns AI tool created
   *
   * @throws {@link AiConfigsApi.PostAiToolError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postAiTool(
    request: AiConfigsApi.PostAiToolRequest,
    options?: RequestOptions,
  ): ApiPromise<AiTool, AiConfigsApi.PostAiToolError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-tools"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: aiToolPostSchema },
      },
      {
        success: { kind: "json", schema: aiToolSchema },
        errorFactory: AiConfigsApi.PostAiToolError,
      },
      options,
    );
  }

  /**
   * Create new agent graph
   *
   * @remarks
   * Create a new agent graph within the given project.
   *
   * @returns Agent graph created
   *
   * @throws {@link AiConfigsApi.PostAgentGraphError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postAgentGraph(
    request: AiConfigsApi.PostAgentGraphRequest,
    options?: RequestOptions,
  ): ApiPromise<AgentGraph, AiConfigsApi.PostAgentGraphError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/agent-graphs"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [
          { name: "LD-API-Version", value: request.ldApiVersion, schema: ldApiVersionSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: agentGraphPostSchema },
      },
      {
        success: { kind: "json", schema: agentGraphSchema },
        errorFactory: AiConfigsApi.PostAgentGraphError,
      },
      options,
    );
  }

  /**
   * Create an AI model config
   *
   * @remarks
   * Create an AI model config. You can use this in any variation for any AI Config in your project.
   *
   * @returns Successful response
   *
   * @throws {@link AiConfigsApi.PostModelConfigError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postModelConfig(
    request: AiConfigsApi.PostModelConfigRequest,
    options?: RequestOptions,
  ): ApiPromise<ModelConfig, AiConfigsApi.PostModelConfigError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/ai-configs/model-configs"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: modelConfigPostSchema },
      },
      {
        success: { kind: "json", schema: modelConfigSchema },
        errorFactory: AiConfigsApi.PostModelConfigError,
      },
      options,
    );
  }

  /**
   * Add AI models to the restricted list
   *
   * @remarks
   * Add AI models, by key, to the restricted list. Keys are included in the response from the [List
   * AI model configs](https://launchdarkly.com/docs/api/ai-configs/list-model-configs) endpoint.
   *
   * @returns Successful response
   *
   * @throws {@link AiConfigsApi.PostRestrictedModelsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  postRestrictedModels(
    request: AiConfigsApi.PostRestrictedModelsRequest,
    options?: RequestOptions,
  ): ApiPromise<RestrictedModelsResponse, AiConfigsApi.PostRestrictedModelsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/ai-configs/model-configs/restricted",
        ),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: restrictedModelsRequestSchema },
      },
      {
        success: { kind: "json", schema: restrictedModelsResponseSchema },
        errorFactory: AiConfigsApi.PostRestrictedModelsError,
      },
      options,
    );
  }
}

export namespace AiConfigsApi {
  export type DeleteAiConfigRequest = {
    projectKey: string;
    configKey: string;
  };

  export class DeleteAiConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAiConfigError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAiConfigVariationRequest = {
    projectKey: string;
    configKey: string;
    variationKey: string;
  };

  export class DeleteAiConfigVariationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAiConfigVariationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAiToolRequest = {
    projectKey: string;
    toolKey: string;
  };

  export class DeleteAiToolError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAiToolError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteAgentGraphRequest = {
    projectKey: string;
    graphKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class DeleteAgentGraphError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteAgentGraphError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteModelConfigRequest = {
    projectKey: string;
    modelConfigKey: string;
  };

  export class DeleteModelConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteModelConfigError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteRestrictedModelsRequest = {
    projectKey: string;
    /** List of AI model keys to remove from the restricted list */
    body: RestrictedModelsRequest;
  };

  export class DeleteRestrictedModelsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteRestrictedModelsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiConfigRequest = {
    projectKey: string;
    configKey: string;
  };

  export class GetAiConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAiConfigError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiConfigMetricsRequest = {
    projectKey: string;
    configKey: string;
    /** The starting time, as milliseconds since epoch (inclusive). */
    from: number;
    /**
     * The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after
     * `from`.
     */
    to: number;
    /** An environment key. Only metrics from this environment will be included. */
    env: string;
  };

  export class GetAiConfigMetricsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAiConfigMetricsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiConfigMetricsByVariationRequest = {
    projectKey: string;
    configKey: string;
    /** The starting time, as milliseconds since epoch (inclusive). */
    from: number;
    /**
     * The ending time, as milliseconds since epoch (exclusive). May not be more than 100 days after
     * `from`.
     */
    to: number;
    /** An environment key. Only metrics from this environment will be included. */
    env: string;
  };

  export class GetAiConfigMetricsByVariationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAiConfigMetricsByVariationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiConfigTargetingRequest = {
    projectKey: string;
    configKey: string;
  };

  export class GetAiConfigTargetingError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAiConfigTargetingError> = [
      { on: 403, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiConfigVariationRequest = {
    projectKey: string;
    configKey: string;
    variationKey: string;
  };

  export class GetAiConfigVariationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAiConfigVariationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiConfigsRequest = {
    projectKey: string;
    /** A sort to apply to the list of AI Configs. */
    sort?: string;
    /** The number of AI Configs to return. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /** A filter to apply to the list of AI Configs. */
    filter?: string;
  };

  export class GetAiConfigsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAiConfigsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAiToolRequest = {
    projectKey: string;
    toolKey: string;
  };

  export class GetAiToolError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAiToolError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetAgentGraphRequest = {
    projectKey: string;
    graphKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class GetAgentGraphError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAgentGraphError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetModelConfigRequest = {
    projectKey: string;
    modelConfigKey: string;
  };

  export class GetModelConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetModelConfigError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAiToolVersionsRequest = {
    projectKey: string;
    toolKey: string;
    /** A sort to apply to the list of AI Configs. */
    sort?: string;
    /** The number of AI Configs to return. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
  };

  export class ListAiToolVersionsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAiToolVersionsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAiToolsRequest = {
    projectKey: string;
    /** A sort to apply to the list of AI Configs. */
    sort?: string;
    /** The number of AI Configs to return. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /** A filter to apply to the list of AI Configs. */
    filter?: string;
  };

  export class ListAiToolsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAiToolsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListAgentGraphsRequest = {
    projectKey: string;
    /** The number of AI Configs to return. */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
  };

  export class ListAgentGraphsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListAgentGraphsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListModelConfigsRequest = {
    projectKey: string;
    /** Whether to return only restricted models */
    restricted?: boolean;
  };

  export class ListModelConfigsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListModelConfigsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PatchAiConfigRequest = {
    projectKey: string;
    configKey: string;
    /** AI Config object to update */
    body?: AiConfigPatch;
  };

  export class PatchAiConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchAiConfigError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PatchAiConfigTargetingRequest = {
    projectKey: string;
    configKey: string;
    /** AI Config targeting semantic patch instructions */
    body?: AiConfigTargetingPatch;
  };

  export class PatchAiConfigTargetingError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchAiConfigTargetingError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PatchAiConfigVariationRequest = {
    projectKey: string;
    configKey: string;
    variationKey: string;
    /** AI Config variation object to update */
    body?: AiConfigVariationPatch;
  };

  export class PatchAiConfigVariationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchAiConfigVariationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PatchAiToolRequest = {
    projectKey: string;
    toolKey: string;
    /** AI tool object to update */
    body?: AiToolPatch;
  };

  export class PatchAiToolError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchAiToolError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PatchAgentGraphRequest = {
    projectKey: string;
    graphKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
    /** Agent graph object to update */
    body?: AgentGraphPatch;
  };

  export class PatchAgentGraphError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PatchAgentGraphError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostAiConfigRequest = {
    projectKey: string;
    /** AI Config object to create */
    body: AiConfigPost;
  };

  export class PostAiConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostAiConfigError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostAiConfigVariationRequest = {
    projectKey: string;
    configKey: string;
    /** AI Config variation object to create */
    body: AiConfigVariationPost;
  };

  export class PostAiConfigVariationError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostAiConfigVariationError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostAiToolRequest = {
    projectKey: string;
    /** AI tool object to create */
    body: AiToolPost;
  };

  export class PostAiToolError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostAiToolError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostAgentGraphRequest = {
    projectKey: string;
    /** Version of the endpoint. */
    ldApiVersion: LdApiVersion;
    /** Agent graph object to create */
    body: AgentGraphPost;
  };

  export class PostAgentGraphError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostAgentGraphError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 413, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostModelConfigRequest = {
    projectKey: string;
    /** AI model config object to create */
    body: ModelConfigPost;
  };

  export class PostModelConfigError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostModelConfigError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PostRestrictedModelsRequest = {
    projectKey: string;
    /** List of AI model keys to add to the restricted list. */
    body: RestrictedModelsRequest;
  };

  export class PostRestrictedModelsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostRestrictedModelsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
