import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `integer` value. */
export type MultiTeamFundraisingLimit = {
  /** @default "multi_team_fundraising_limit" */
  name?: "multi_team_fundraising_limit";
  value?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const multiTeamFundraisingLimitSchema: Schema<MultiTeamFundraisingLimit> =
  s.object<MultiTeamFundraisingLimit>(
    {
      name: s.defaulted(s.literal("multi_team_fundraising_limit"), "multi_team_fundraising_limit"),
      value: s.optionalNullable(s.int()),
    },
    { additionalProperties: s.json() },
  );
