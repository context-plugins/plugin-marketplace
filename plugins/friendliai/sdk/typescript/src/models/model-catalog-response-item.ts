import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { functionality1Schema, type Functionality1 } from "./functionality1.js";
import { modalitySchema, type Modality } from "./modality.js";
import { mode1Schema, type Mode1 } from "./mode1.js";
import { pricingModel2Schema, type PricingModel2 } from "./pricing-model2.js";
import { baseModelSchema, type BaseModel } from "./unions/base-model.js";
import { defaultParamsSchema, type DefaultParams } from "./unions/default-params.js";
import { deprecationDateSchema, type DeprecationDate } from "./unions/deprecation-date.js";
import { interleavedSchema, type Interleaved } from "./unions/interleaved.js";
import { reasoningOptionsSchema, type ReasoningOptions } from "./unions/reasoning-options.js";

/** Model listing in `/v1/models` API. */
export type ModelCatalogResponseItem = {
  /** Model identifier. Pass this as the `model` field in inference API requests. */
  id: string;
  /** Display name of the model. */
  name: string;
  /**
   * Unix timestamp (seconds) of when Friendli started serving this model on Model APIs. Not the
   * original model release date.
   */
  created: number;
  /** Maximum tokens in a single request, shared between input and output. */
  contextLength: number;
  /**
   * Maximum number of tokens the model can generate in a single response (same as max output
   * tokens).
   */
  maxCompletionTokens: number;
  /** Per-token pricing in USD for input, output, and optional cache or audio usage. */
  pricing: PricingModel2;
  /**
   * Which features the model supports, such as tool calling, structured output, and system
   * messages.
   */
  functionality: Functionality1;
  /** Brief description of the model. */
  description: string;
  /**
   * Scheduled deprecation date in ISO 8601 UTC (YYYY-MM-DDTHH:00:00Z). The model is inactive once
   * this date has passed.
   */
  deprecationDate: DeprecationDate;
  /** Whether the model supports reasoning. */
  reasoning: boolean;
  /**
   * Reasoning controls the model supports, such as toggling it on or off, selecting an effort
   * level, or setting a token budget. A model may support more than one of these at the same time.
   * Present only when reasoning is supported.
   */
  reasoningOptions: ReasoningOptions;
  /** Input types the model accepts, such as text, image, or audio. */
  inputModalities: Modality[];
  /** Output types the model can produce, such as text or image. */
  outputModalities: Modality[];
  /**
   * `false` means reasoning stays in `content` and cannot be separated. A string
   * (`reasoning_content` or `reasoning_details`) means the model can parse reasoning into a
   * top-level field of that name via `parse_reasoning`.
   */
  interleaved: Interleaved;
  /** Canonical model identifier from models.dev (e.g. `zhipuai/glm-5.3`). */
  baseModel: BaseModel;
  /** Primary API endpoint type for this model. */
  mode: Mode1;
  /**
   * Default sampling parameters applied at inference time when the request does not specify them.
   */
  defaultParams: DefaultParams;
};

export const modelCatalogResponseItemSchema: Schema<ModelCatalogResponseItem> =
  s.object<ModelCatalogResponseItem>({
    id: s.string(),
    name: s.string(),
    created: s.int(),
    contextLength: s.int(),
    maxCompletionTokens: s.int(),
    pricing: pricingModel2Schema,
    functionality: functionality1Schema,
    description: s.string(),
    deprecationDate: deprecationDateSchema,
    reasoning: s.boolean(),
    reasoningOptions: reasoningOptionsSchema,
    inputModalities: s.array(s.lazy(() => modalitySchema)),
    outputModalities: s.array(s.lazy(() => modalitySchema)),
    interleaved: interleavedSchema,
    baseModel: baseModelSchema,
    mode: mode1Schema,
    defaultParams: defaultParamsSchema,
    _keysMap: {
      contextLength: "context_length",
      maxCompletionTokens: "max_completion_tokens",
      deprecationDate: "deprecation_date",
      reasoningOptions: "reasoning_options",
      inputModalities: "input_modalities",
      outputModalities: "output_modalities",
      baseModel: "base_model",
      defaultParams: "default_params",
    },
  });
