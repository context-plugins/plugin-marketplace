import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type RequireDonorPhone = {
  /** @default "require_donor_phone" */
  name?: "require_donor_phone";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requireDonorPhoneSchema: Schema<RequireDonorPhone> = s.object<RequireDonorPhone>(
  {
    name: s.defaulted(s.literal("require_donor_phone"), "require_donor_phone"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
