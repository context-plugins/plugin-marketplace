import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Location filter for hiring signals. `country` is required; `state` is optional. */
export type SignalFilterLocation = {
  country: string;
  state?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalFilterLocationSchema: Schema<SignalFilterLocation> = s.object<SignalFilterLocation>(
  {
    country: s.string(),
    state: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
