import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Competitor = {
  /** Lusha company ID of the competitor */
  id?: string;
  /** Company name of the competitor */
  name?: string;
  /** Primary domain of the competitor */
  domain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const competitorSchema: Schema<Competitor> = s.object<Competitor>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    domain: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
