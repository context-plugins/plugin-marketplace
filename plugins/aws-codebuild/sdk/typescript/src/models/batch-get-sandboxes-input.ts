import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchGetSandboxesInput = {
  /** A comma separated list of sandboxIds or sandboxArns. */
  ids: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetSandboxesInputSchema: Schema<BatchGetSandboxesInput> = s.object<BatchGetSandboxesInput>(
  {
    ids: s.array(s.string()),
  },
  { additionalProperties: s.json() },
);
