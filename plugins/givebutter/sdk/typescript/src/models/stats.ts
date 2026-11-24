import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Stats = {
  totalContributions: string;
  recurringContributions: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statsSchema: Schema<Stats> = s.object<Stats>(
  {
    totalContributions: s.string(),
    recurringContributions: s.string(),
    _keysMap: {
      totalContributions: "total_contributions",
      recurringContributions: "recurring_contributions",
    },
  },
  { additionalProperties: s.json() },
);
