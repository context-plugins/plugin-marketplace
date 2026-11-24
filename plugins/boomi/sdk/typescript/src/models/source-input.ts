import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Input for creating a data source. */
export type SourceInput = {
  /** Display name for the source. */
  name: string;
  /** Optional description of the source system. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sourceInputSchema: Schema<SourceInput> = s.object<SourceInput>(
  {
    name: s.string(),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
