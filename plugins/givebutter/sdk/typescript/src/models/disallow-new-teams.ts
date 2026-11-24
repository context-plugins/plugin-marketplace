import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Accepts a `boolean` value. */
export type DisallowNewTeams = {
  /** @default "disallow_new_teams" */
  name?: "disallow_new_teams";
  value?: boolean | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disallowNewTeamsSchema: Schema<DisallowNewTeams> = s.object<DisallowNewTeams>(
  {
    name: s.defaulted(s.literal("disallow_new_teams"), "disallow_new_teams"),
    value: s.optionalNullable(s.boolean()),
  },
  { additionalProperties: s.json() },
);
