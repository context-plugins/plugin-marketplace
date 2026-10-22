import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  metadataConfInputCollectionSchema,
  type MetadataConfInputCollection,
} from "./metadata-conf-input-collection.js";
import { preprocessTypeSchema, type PreprocessType } from "./preprocess-type.js";
import {
  typeOptionsRunnableJobCollectionInputSchema,
  type TypeOptionsRunnableJobCollectionInput,
} from "./type-options-runnable-job-collection-input.js";

/**
 * Input settings for a collection job, including event breaking, routing, and preprocessing
 * options.
 */
export type InputTypeRunnableJobCollection = {
  /** Resource type identifier. */
  type?: TypeOptionsRunnableJobCollectionInput;
  /** A list of event-breaking rulesets that will be applied, in order, to the input data stream */
  breakerRulesets?: string[];
  /**
   * How long (in milliseconds) the Event Breaker will wait for new data to be sent to a specific
   * channel before flushing the data stream out, as is, to the Pipelines
   */
  staleChannelFlushMs?: number;
  /**
   * Send events to normal routing and event processing. Disable to select a specific
   * Pipeline/Destination combination.
   */
  sendToRoutes?: boolean;
  /**
   * Optional preprocessing step that pipes collected data through an external command before
   * ingestion.
   */
  preprocess?: PreprocessType;
  /**
   * Rate (in bytes per second) to throttle while writing to an output. Accepts values with
   * multiple-byte units, such as KB, MB, and GB. (Example: 42 MB) Default value of 0 specifies no
   * throttling.
   */
  throttleRatePerSec?: string;
  /** Fields to add to events from this input */
  metadata?: MetadataConfInputCollection[];
  /** Pipeline to process results */
  pipeline?: string;
  /** Destination to send results to */
  output?: string;
};

export const inputTypeRunnableJobCollectionSchema: Schema<InputTypeRunnableJobCollection> =
  s.object<InputTypeRunnableJobCollection>({
    type: s.optional(s.lazy(() => typeOptionsRunnableJobCollectionInputSchema)),
    breakerRulesets: s.optional(s.array(s.string())),
    staleChannelFlushMs: s.optional(s.float64()),
    sendToRoutes: s.optional(s.boolean()),
    preprocess: s.optional(s.lazy(() => preprocessTypeSchema)),
    throttleRatePerSec: s.optional(s.string()),
    metadata: s.optional(s.array(s.lazy(() => metadataConfInputCollectionSchema))),
    pipeline: s.optional(s.string()),
    output: s.optional(s.string()),
  });
