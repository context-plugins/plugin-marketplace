import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BsDsResponse = {
  bsds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bsDsResponseSchema: Schema<BsDsResponse> = s.object<BsDsResponse>(
  {
    bsds: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
