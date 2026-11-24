import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { activitySchema, type Activity } from "./activity.js";
import { formTypeSchema, type FormType } from "./form-type.js";
import { statedRoleSchema, type StatedRole } from "./stated-role.js";

export type Context = {
  formType?: FormType;
  message?: string;
  /** USD */
  statedValue?: number;
  statedRole?: StatedRole;
  country?: string;
  activity?: Activity;
  /**
   * vendor_claim / listing_claim: the website of the business or listing being claimed. Enables the
   * affiliation check.
   */
  claimedWebsite?: string;
  /** The place or market the sender stated ("Jakarta"): shown on read.sender, never stored */
  statedLocation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contextProperties: s.Shape<Context> = {
  formType: s.optional(s.lazy(() => formTypeSchema)),
  message: s.optional(s.string()),
  statedValue: s.optional(s.float64()),
  statedRole: s.optional(s.lazy(() => statedRoleSchema)),
  country: s.optional(s.string()),
  activity: s.optional(s.lazy(() => activitySchema)),
  claimedWebsite: s.optional(s.string()),
  statedLocation: s.optional(s.string()),
  _keysMap: {
    formType: "form_type",
    statedValue: "stated_value",
    statedRole: "stated_role",
    claimedWebsite: "claimed_website",
    statedLocation: "stated_location",
  },
};

export const contextInternalSchema: Schema<Context> = s.object<Context>(contextProperties, {
  additionalProperties: s.json(),
});

export const contextSchema: Schema<Context> = s.lazySchema(() =>
  s.object<Context>(
    {
      ...contextProperties,
      message: s.optional(s.string().check(s.maxLength(5000))),
      statedValue: s.optional(s.float64().check(s.gte(0))),
      country: s.optional(s.string().check(s.pattern("^[A-Z]{2}$"))),
      statedLocation: s.optional(s.string().check(s.maxLength(80))),
    },
    { additionalProperties: s.json() },
  ),
);
