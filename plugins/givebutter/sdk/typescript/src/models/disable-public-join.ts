import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type DisablePublicJoin = {
  /** @default "disable_public_join" */
  name?: "disable_public_join";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disablePublicJoinSchema: Schema<DisablePublicJoin> = s.object<DisablePublicJoin>(
  {
    name: s.defaulted(s.literal("disable_public_join"), "disable_public_join"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
