import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { v3ItemErrorSchema, type V3ItemError } from "./v3-item-error.js";
import {
  v3SignalScoreContactCompanyRefSchema,
  type V3SignalScoreContactCompanyRef,
} from "./v3-signal-score-contact-company-ref.js";

/** A scored entry, or an error entry with NOT_FOUND / NO_SCORE instead of the score fields. */
export type V3SignalScoreContactResult = {
  clientReferenceId?: string;
  /**
   * Encrypted Lusha contact ID for scored entries. On NOT_FOUND, echoes the supplied id, if one was
   * given.
   */
  id?: string;
  fullName?: string;
  /** Company the contact was scored at. */
  company?: V3SignalScoreContactCompanyRef;
  /** Aggregate signal score. Absent on error entries. */
  signalScore?: number;
  /**
   * Signal types currently active for this contact (canonical camelCase). Absent on error entries.
   */
  signalTypes?: string[];
  /**
   * True when the contact resolved and scored but has no active signals (signalScore is 0). Absent
   * on error entries.
   */
  noActiveSignals?: boolean;
  /** Per-item error in a batch response */
  error?: V3ItemError;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v3SignalScoreContactResultProperties: s.Shape<V3SignalScoreContactResult> = {
  clientReferenceId: s.optional(s.string()),
  id: s.optional(s.string()),
  fullName: s.optional(s.string()),
  company: s.optional(s.lazy(() => v3SignalScoreContactCompanyRefSchema)),
  signalScore: s.optional(s.float64()),
  signalTypes: s.optional(s.array(s.string())),
  noActiveSignals: s.optional(s.boolean()),
  error: s.optional(s.lazy(() => v3ItemErrorSchema)),
};

export const v3SignalScoreContactResultInternalSchema: Schema<V3SignalScoreContactResult> =
  s.object<V3SignalScoreContactResult>(v3SignalScoreContactResultProperties, {
    additionalProperties: s.json(),
  });

export const v3SignalScoreContactResultSchema: Schema<V3SignalScoreContactResult> = s.lazySchema(() =>
  s.object<V3SignalScoreContactResult>(
    {
      ...v3SignalScoreContactResultProperties,
      signalScore: s.optional(s.float64().check(s.gte(0), s.lte(1))),
    },
    { additionalProperties: s.json() },
  ),
);
