import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Metadata about the action that triggered the webhook. */
export type ActionMetadata = {
  /** The source of the action (e.g., client, publicApi, formSubmission). */
  source?: string;
  /** Additional metadata about the source. */
  sourceMetadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const actionMetadataSchema: Schema<ActionMetadata> = s.object<ActionMetadata>(
  {
    source: s.optional(s.string()),
    sourceMetadata: s.optional(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
