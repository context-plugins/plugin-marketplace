import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CidrBlockState = {
  state?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const cidrBlockStateSchema: Schema<CidrBlockState> = s.object<CidrBlockState>(
  {
    state: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
