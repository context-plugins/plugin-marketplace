import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type IntentMetadata = {
  /** The name of the intent. */
  name?: string;
  /** A description of the intent. */
  description?: string;
  /**
   * The date that the intent was updated. When you create an intent, the creation date and last
   * updated date are the same.
   */
  lastUpdatedDate?: Date;
  /** The date that the intent was created. */
  createdDate?: Date;
  /** The version of the intent. */
  version?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentMetadataSchema: Schema<IntentMetadata> = s.object<IntentMetadata>(
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    lastUpdatedDate: s.optional(s.dateTime()),
    createdDate: s.optional(s.dateTime()),
    version: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
