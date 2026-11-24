import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type RequireAddress = {
  /** @default "require_address" */
  name?: "require_address";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requireAddressSchema: Schema<RequireAddress> = s.object<RequireAddress>(
  {
    name: s.defaulted(s.literal("require_address"), "require_address"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
