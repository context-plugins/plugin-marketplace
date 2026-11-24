import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration for applying a specific extractor */
export type ExtractorOption = {
  /** Unique identifier of the extractor to apply */
  extractorId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const extractorOptionSchema: Schema<ExtractorOption> = s.object<ExtractorOption>(
  {
    extractorId: s.string(),
  },
  { additionalProperties: s.json() },
);
