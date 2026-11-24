import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type DisableTeamFundraising = {
  /** @default "disable_team_fundraising" */
  name?: "disable_team_fundraising";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disableTeamFundraisingSchema: Schema<DisableTeamFundraising> = s.object<DisableTeamFundraising>(
  {
    name: s.defaulted(s.literal("disable_team_fundraising"), "disable_team_fundraising"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
