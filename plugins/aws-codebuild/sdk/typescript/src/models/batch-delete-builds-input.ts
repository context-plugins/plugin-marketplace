import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchDeleteBuildsInput = {
  /** The IDs of the builds to delete. */
  ids: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDeleteBuildsInputSchema: Schema<BatchDeleteBuildsInput> = s.object<BatchDeleteBuildsInput>(
  {
    ids: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
