import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The span semantics to use. Configuration Requirements (if span_semantics is OTEL): -
 * trace_protocol must be OTLP.
 */
export const SpanSemantics = {
  SpanSemanticsUnspecified: "SPAN_SEMANTICS_UNSPECIFIED",
  Legacy: "LEGACY",
  Otel: "OTEL",
} as const;
export type SpanSemantics = (typeof SpanSemantics)[keyof typeof SpanSemantics] | (string & {});

export const spanSemanticsSchema: EnumSchema<SpanSemantics> = s.enumOf<SpanSemantics>(SpanSemantics);
