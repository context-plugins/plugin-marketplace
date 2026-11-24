import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An object describes subscription status related to user */
export type Data2 = {
  /** Does user subscribed on requested subscription */
  active?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data2Schema: Schema<Data2> = s.object<Data2>(
  {
    active: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
