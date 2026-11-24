import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Keyed calls only: signed one-click URLs that record an outcome (POST /v1/outcomes) without a
 * login.
 */
export type OutcomeLinks = {
  legit?: string;
  salesPitch?: string;
  spam?: string;
  scam?: string;
  closed?: string;
  /** 2026-10-05 button, still accepted */
  good?: string;
  /** 2026-10-05 button, still accepted */
  junk?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const outcomeLinksSchema: Schema<OutcomeLinks> = s.object<OutcomeLinks>(
  {
    legit: s.optional(s.string()),
    salesPitch: s.optional(s.string()),
    spam: s.optional(s.string()),
    scam: s.optional(s.string()),
    closed: s.optional(s.string()),
    good: s.optional(s.string()),
    junk: s.optional(s.string()),
    _keysMap: {
      salesPitch: "sales_pitch",
    },
  },
  { additionalProperties: s.json() },
);
