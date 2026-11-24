import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1RiskIndicatorsReadingsRequest = {
  /** The whole month the figure is for, YYYY-MM */
  period: string;
  /**
   * The figure: a count, minutes, or a percentage. Omit for a ratio indicator and give numerator
   * and denominator
   */
  value?: number;
  /** For a ratio indicator: how many were in the condition counted */
  numerator?: number;
  /** For a ratio indicator: how many there were in all */
  denominator?: number;
  /** How much of what should have been counted was counted, as a percentage */
  completeness?: number;
  /** Where the figure comes from: the report, review or system, and where to find it */
  evidence: string;
  note?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1RiskIndicatorsReadingsRequestProperties: s.Shape<ApiV1RiskIndicatorsReadingsRequest> = {
  period: s.string(),
  value: s.optional(s.float64()),
  numerator: s.optional(s.int()),
  denominator: s.optional(s.int()),
  completeness: s.optional(s.float64()),
  evidence: s.string(),
  note: s.optional(s.string()),
};

export const apiV1RiskIndicatorsReadingsRequestInternalSchema: Schema<ApiV1RiskIndicatorsReadingsRequest> =
  s.object<ApiV1RiskIndicatorsReadingsRequest>(apiV1RiskIndicatorsReadingsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1RiskIndicatorsReadingsRequestSchema: Schema<ApiV1RiskIndicatorsReadingsRequest> =
  s.lazySchema(() =>
    s.object<ApiV1RiskIndicatorsReadingsRequest>(
      {
        ...apiV1RiskIndicatorsReadingsRequestProperties,
        period: s.string().check(s.pattern("^\\d{4}-(0[1-9]|1[0-2])$")),
        value: s.optional(s.float64().check(s.gte(0))),
        numerator: s.optional(s.int().check(s.gte(0))),
        denominator: s.optional(s.int().check(s.gte(0))),
        completeness: s.optional(s.float64().check(s.gte(0), s.lte(100))),
        evidence: s.string().check(s.minLength(1), s.maxLength(4000)),
        note: s.optional(s.string().check(s.maxLength(2000))),
      },
      { additionalProperties: s.json() },
    ),
  );
