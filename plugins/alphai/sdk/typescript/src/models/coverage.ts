import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { coverageSourceSchema, type CoverageSource } from "./coverage-source.js";

export type Coverage = {
  /** When the cached payload was assembled (UTC). */
  generatedAt: Date;
  /**
   * The instant the counts were taken (UTC). Up to a day older than the response — the passport is
   * recomputed daily, not per request.
   */
  asOf: Date;
  /** Always `true`. Research information, not investment advice. */
  researchOnly: boolean;
  /**
   * Fixed order: publisher_news, sec_form4, sec_form8k, sec_form6k, earnings_reads,
   * earnings_schedule, economic_calendar. A source with no rows is still present, with null dates
   * and `rows_total: 0`.
   */
  sources: CoverageSource[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const coverageSchema: Schema<Coverage> = s.object<Coverage>(
  {
    generatedAt: s.dateTime(),
    asOf: s.dateTime(),
    researchOnly: s.boolean(),
    sources: s.array(s.lazy(() => coverageSourceSchema)),
    _keysMap: {
      generatedAt: "generated_at",
      asOf: "as_of",
      researchOnly: "research_only",
    },
  },
  { additionalProperties: s.json() },
);
