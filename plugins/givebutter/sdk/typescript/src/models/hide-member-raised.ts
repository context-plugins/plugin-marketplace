import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type HideMemberRaised = {
  /** @default "hide_member_raised" */
  name?: "hide_member_raised";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hideMemberRaisedSchema: Schema<HideMemberRaised> = s.object<HideMemberRaised>(
  {
    name: s.defaulted(s.literal("hide_member_raised"), "hide_member_raised"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
