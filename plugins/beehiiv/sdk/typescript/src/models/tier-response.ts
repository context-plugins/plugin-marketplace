import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tierSchema, type Tier } from "./tier.js";

export type TierResponse = {
  /** The subscription tier object. */
  data?: Tier;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tierResponseSchema: Schema<TierResponse> = s.object<TierResponse>(
  {
    data: s.optional(s.lazy(() => tierSchema)),
  },
  { additionalProperties: s.json() },
);
