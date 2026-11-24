import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3ItemErrorSchema, type V3ItemError } from "./v3-item-error.js";

/** A scored entry, or an error entry with NOT_FOUND / NO_SCORE instead of the score fields. */
export type V3SignalScoreCompanyResult = {
  clientReferenceId?: string;
  /**
   * Encrypted Lusha company ID for scored entries. On NOT_FOUND, echoes the supplied domain/name
   * (or the derived domain, for an email request).
   */
  id?: string;
  name?: string;
  domain?: string;
  /**
   * Aggregate signal score - the fraction of the company's active signals. Absent on error entries.
   */
  signalScore?: number;
  /**
   * Signal types currently active for this company (canonical camelCase). Absent on error entries.
   */
  signalTypes?: string[];
  /**
   * True when the company resolved and scored but has no active signals (signalScore is 0). Absent
   * on error entries.
   */
  noActiveSignals?: boolean;
  /** Per-item error in a batch response */
  error?: V3ItemError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3SignalScoreCompanyResultProperties: s.Shape<V3SignalScoreCompanyResult> = {
  clientReferenceId: s.optional(s.string()),
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  domain: s.optional(s.string()),
  signalScore: s.optional(s.float64()),
  signalTypes: s.optional(s.array(s.string())),
  noActiveSignals: s.optional(s.boolean()),
  error: s.optional(s.lazy(() => v3ItemErrorSchema)),
};

export const v3SignalScoreCompanyResultInternalSchema: Schema<V3SignalScoreCompanyResult> =
  s.object<V3SignalScoreCompanyResult>(v3SignalScoreCompanyResultProperties, {
    additionalProperties: s.json(),
  });

export const v3SignalScoreCompanyResultSchema: Schema<V3SignalScoreCompanyResult> = s.lazySchema(() =>
  s.object<V3SignalScoreCompanyResult>(
    {
      ...v3SignalScoreCompanyResultProperties,
      signalScore: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
