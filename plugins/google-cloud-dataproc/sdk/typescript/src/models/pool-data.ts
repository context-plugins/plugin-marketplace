import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Pool Data */
export type PoolData = {
  name?: string;
  stageIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const poolDataSchema: Schema<PoolData> = s.object<PoolData>(
  {
    name: s.optional(s.string()),
    stageIds: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
