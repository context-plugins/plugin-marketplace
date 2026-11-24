import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A business application entry in the application inventory */
export type Application = {
  /** Unique integer identifier of the application */
  id?: number;
  /** Display name of the application */
  name: string;
  /** Vendor or provider of the application */
  vendor?: string;
  /** Category classification of the application */
  category?: string;
  /** Optional description of the application */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationSchema: Schema<Application> = s.object<Application>(
  {
    id: s.optional(s.int()),
    name: s.string(),
    vendor: s.optional(s.string()),
    category: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
