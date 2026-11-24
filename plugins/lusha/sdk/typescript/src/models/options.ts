import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Options = {
  /** @default true */
  includePartialProfiles?: boolean;
  excludeDnc?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const optionsSchema: Schema<Options> = s.object<Options>(
  {
    includePartialProfiles: s.defaulted(s.boolean(), true),
    excludeDnc: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
