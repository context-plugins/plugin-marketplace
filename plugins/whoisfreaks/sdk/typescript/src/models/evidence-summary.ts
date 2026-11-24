import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EvidenceSummary = {
  whyFlagged?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const evidenceSummarySchema: Schema<EvidenceSummary> = s.object<EvidenceSummary>(
  {
    whyFlagged: s.optional(s.array(s.string())),
    _keysMap: {
      whyFlagged: "why_flagged",
    },
  },
  { additionalProperties: s.json() },
);
