import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `string` value. */
export type CustomTeamLeaderboardHeading = {
  /** @default "custom_team_leaderboard_heading" */
  name?: "custom_team_leaderboard_heading";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customTeamLeaderboardHeadingSchema: Schema<CustomTeamLeaderboardHeading> =
  s.object<CustomTeamLeaderboardHeading>(
    {
      name: s.defaulted(s.literal("custom_team_leaderboard_heading"), "custom_team_leaderboard_heading"),
      value: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
