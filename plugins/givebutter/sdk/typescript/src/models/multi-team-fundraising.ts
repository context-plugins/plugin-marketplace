import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type MultiTeamFundraising = {
  /** @default "multi_team_fundraising" */
  name?: "multi_team_fundraising";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const multiTeamFundraisingSchema: Schema<MultiTeamFundraising> = s.object<MultiTeamFundraising>(
  {
    name: s.defaulted(s.literal("multi_team_fundraising"), "multi_team_fundraising"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
