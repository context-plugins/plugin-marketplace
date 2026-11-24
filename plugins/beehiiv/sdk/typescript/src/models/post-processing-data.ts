import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PostProcessingData = {
  /** The prefixed post id. Stable — this is the id the post will have once created. */
  id: string;
  /** The background creation state of the post. @default "pending" */
  state?: "pending";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postProcessingDataSchema: Schema<PostProcessingData> = s.object<PostProcessingData>(
  {
    id: s.string(),
    state: s.defaulted(s.literal("pending"), "pending"),
  },
  { additionalProperties: s.json() },
);
