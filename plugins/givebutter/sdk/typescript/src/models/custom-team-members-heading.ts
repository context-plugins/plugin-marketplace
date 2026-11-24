import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `string` value. */
export type CustomTeamMembersHeading = {
  /** @default "custom_team_members_heading" */
  name?: "custom_team_members_heading";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customTeamMembersHeadingSchema: Schema<CustomTeamMembersHeading> =
  s.object<CustomTeamMembersHeading>(
    {
      name: s.defaulted(s.literal("custom_team_members_heading"), "custom_team_members_heading"),
      value: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
