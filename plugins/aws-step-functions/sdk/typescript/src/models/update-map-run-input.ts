import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateMapRunInput = {
  /** The Amazon Resource Name (ARN) of a Map Run. */
  mapRunArn: string;
  /**
   * The maximum number of child workflow executions that can be specified to run in parallel for
   * the Map Run at the same time.
   */
  maxConcurrency?: number;
  /** The maximum percentage of failed items before the Map Run fails. */
  toleratedFailurePercentage?: number;
  /** The maximum number of failed items before the Map Run fails. */
  toleratedFailureCount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateMapRunInputSchema: Schema<UpdateMapRunInput> = s.object<UpdateMapRunInput>(
  {
    mapRunArn: s.string(),
    maxConcurrency: s.optional(s.int()),
    toleratedFailurePercentage: s.optional(s.float64()),
    toleratedFailureCount: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
