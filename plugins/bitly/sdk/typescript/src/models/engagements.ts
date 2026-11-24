import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { engagementSchema, type Engagement } from "./engagement.js";

export type Engagements = {
  engagementCount?: number;
  engagements?: Engagement;
  date?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const engagementsSchema: Schema<Engagements> = s.object<Engagements>(
  {
    engagementCount: s.optional(s.int()),
    engagements: s.optional(s.lazy(() => engagementSchema)),
    date: s.optional(s.string()),
    _keysMap: {
      engagementCount: "engagement_count",
    },
  },
  { additionalProperties: s.json() },
);
