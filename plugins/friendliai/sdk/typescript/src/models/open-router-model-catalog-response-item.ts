import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capacityTpmSchema, type CapacityTpm } from "./unions/capacity-tpm.js";
import { datacentersSchema, type Datacenters } from "./unions/datacenters.js";
import { deprecationDate1Schema, type DeprecationDate1 } from "./unions/deprecation-date1.js";
import { description5Schema, type Description5 } from "./unions/description5.js";
import { discountToUserSchema, type DiscountToUser } from "./unions/discount-to-user.js";
import { isFreeSchema, type IsFree } from "./unions/is-free.js";
import { isReadySchema, type IsReady } from "./unions/is-ready.js";
import { maxOutputLengthSchema, type MaxOutputLength } from "./unions/max-output-length.js";
import { openrouterSchema, type Openrouter } from "./unions/openrouter.js";
import { pricingSchema, type Pricing } from "./unions/pricing.js";
import { quantizationSchema, type Quantization } from "./unions/quantization.js";

/** Model listing in `/v1/openrouter/models` API (OpenRouter provider format). */
export type OpenRouterModelCatalogResponseItem = {
  id: string;
  /** Required when the model is hosted on Hugging Face. */
  huggingFaceId?: string;
  name: string;
  created: number;
  inputModalities: string[];
  outputModalities: string[];
  /** Model quantization level. */
  quantization?: Quantization;
  contextLength: number;
  maxOutputLength?: MaxOutputLength;
  /** Token prices in USD per token as strings. */
  pricing: Pricing;
  supportedSamplingParameters: string[];
  supportedFeatures: string[];
  description?: Description5;
  /** ISO 8601 UTC hour (YYYY-MM-DDTHH:00:00Z). */
  deprecationDate?: DeprecationDate1;
  /** Whether the model is ready to serve traffic on OpenRouter. */
  isReady?: IsReady;
  /** Whether the model is offered as a free endpoint. */
  isFree?: IsFree;
  /** Fractional discount applied to user-facing pricing. */
  discountToUser?: DiscountToUser;
  /** Input tokens per minute capacity. */
  capacityTpm?: CapacityTpm;
  openrouter?: Openrouter;
  datacenters?: Datacenters;
};

export const openRouterModelCatalogResponseItemSchema: Schema<OpenRouterModelCatalogResponseItem> =
  s.object<OpenRouterModelCatalogResponseItem>({
    id: s.string(),
    huggingFaceId: s.optional(s.string()),
    name: s.string(),
    created: s.int(),
    inputModalities: s.array(s.string()),
    outputModalities: s.array(s.string()),
    quantization: s.optional(s.lazy(() => quantizationSchema)),
    contextLength: s.int(),
    maxOutputLength: s.optional(s.lazy(() => maxOutputLengthSchema)),
    pricing: pricingSchema,
    supportedSamplingParameters: s.array(s.string()),
    supportedFeatures: s.array(s.string()),
    description: s.optional(s.lazy(() => description5Schema)),
    deprecationDate: s.optional(s.lazy(() => deprecationDate1Schema)),
    isReady: s.optional(s.lazy(() => isReadySchema)),
    isFree: s.optional(s.lazy(() => isFreeSchema)),
    discountToUser: s.optional(s.lazy(() => discountToUserSchema)),
    capacityTpm: s.optional(s.lazy(() => capacityTpmSchema)),
    openrouter: s.optional(s.lazy(() => openrouterSchema)),
    datacenters: s.optional(s.lazy(() => datacentersSchema)),
    _keysMap: {
      huggingFaceId: "hugging_face_id",
      inputModalities: "input_modalities",
      outputModalities: "output_modalities",
      contextLength: "context_length",
      maxOutputLength: "max_output_length",
      supportedSamplingParameters: "supported_sampling_parameters",
      supportedFeatures: "supported_features",
      deprecationDate: "deprecation_date",
      isReady: "is_ready",
      isFree: "is_free",
      discountToUser: "discount_to_user",
      capacityTpm: "capacity_tpm",
    },
  });
