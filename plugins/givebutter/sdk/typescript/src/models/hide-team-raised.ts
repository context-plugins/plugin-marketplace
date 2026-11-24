import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type HideTeamRaised = {
  /** @default "hide_team_raised" */
  name?: "hide_team_raised";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hideTeamRaisedSchema: Schema<HideTeamRaised> = s.object<HideTeamRaised>(
  {
    name: s.defaulted(s.literal("hide_team_raised"), "hide_team_raised"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
