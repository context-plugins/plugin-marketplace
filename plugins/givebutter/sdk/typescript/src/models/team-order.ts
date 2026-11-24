import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Team list ordering. Typical values: `name`, `donors`, `created_at`. */
export type TeamOrder = {
  /** @default "team_order" */
  name?: "team_order";
  value?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const teamOrderSchema: Schema<TeamOrder> = s.object<TeamOrder>(
  {
    name: s.defaulted(s.literal("team_order"), "team_order"),
    value: s.optionalNullable(s.string()),
  },
  { additionalProperties: s.json() },
);
