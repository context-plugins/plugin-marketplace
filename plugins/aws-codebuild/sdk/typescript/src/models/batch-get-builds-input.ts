import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchGetBuildsInput = {
  /** The IDs of the builds. */
  ids: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetBuildsInputSchema: Schema<BatchGetBuildsInput> = s.object<BatchGetBuildsInput>(
  {
    ids: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
