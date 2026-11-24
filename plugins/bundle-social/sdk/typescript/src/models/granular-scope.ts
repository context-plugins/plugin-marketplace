import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GranularScope = {
  scope: string;
  targetIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const granularScopeSchema: Schema<GranularScope> = s.object<GranularScope>(
  {
    scope: s.string(),
    targetIds: s.optional(s.array(s.string())),
    _keysMap: {
      targetIds: "target_ids",
    },
  },
  { additionalProperties: s.json() },
);
