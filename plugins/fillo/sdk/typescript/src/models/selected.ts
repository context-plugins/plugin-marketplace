import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The account id this project uses for each provider, or null. */
export type Selected = {
  notion: string | null;
  slack: string | null;
  hubspot: string | null;
  discord: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const selectedSchema: Schema<Selected> = s.object<Selected>(
  {
    notion: s.nullable(s.string()),
    slack: s.nullable(s.string()),
    hubspot: s.nullable(s.string()),
    discord: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
