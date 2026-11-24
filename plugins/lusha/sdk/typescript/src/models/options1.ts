import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Options1 = {
  /** @default false */
  includePartialProfiles?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const options1Schema: Schema<Options1> = s.object<Options1>(
  {
    includePartialProfiles: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
