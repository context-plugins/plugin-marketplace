import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Optional. The span semantics to use. Configuration Requirements (if `span_semantics` is `OTEL`):
 * - `trace_protocol` must be `OTLP`.
 */
export const SpanSemantics1 = {
  SpanSemanticsUnspecified: "SPAN_SEMANTICS_UNSPECIFIED",
  Legacy: "LEGACY",
  Otel: "OTEL",
} as const;
export type SpanSemantics1 = (typeof SpanSemantics1)[keyof typeof SpanSemantics1] | (string & {});

export const spanSemantics1Schema: EnumSchema<SpanSemantics1> = s.enumOf<SpanSemantics1>(SpanSemantics1);
