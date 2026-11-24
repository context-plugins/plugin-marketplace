import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type EnforceEndAt = {
  /** @default "enforce_end_at" */
  name?: "enforce_end_at";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const enforceEndAtSchema: Schema<EnforceEndAt> = s.object<EnforceEndAt>(
  {
    name: s.defaulted(s.literal("enforce_end_at"), "enforce_end_at"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
