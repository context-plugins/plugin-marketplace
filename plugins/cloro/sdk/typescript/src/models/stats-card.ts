import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statSchema, type Stat } from "./stat.js";

/** Statistics card — present for sports teams, organizations, and similar entities */
export type StatsCard = {
  /** Context label for the stats (e.g. season or year) */
  context?: string;
  /** Individual stat items */
  stats?: Stat[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statsCardSchema: Schema<StatsCard> = s.object<StatsCard>(
  {
    context: s.optional(s.string()),
    stats: s.optional(s.array(s.lazy(() => statSchema))),
  },
  { additionalProperties: s.json() },
);
