import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  allocationValueExtractionSourceSchema,
  type AllocationValueExtractionSource,
} from "./allocation-value-extraction-source.js";
import { OnMissing, onMissingSchema } from "./on-missing.js";

/**
 * Makes the rule emit a value extracted from the first non-empty source instead of the rule name.
 */
export type AllocationValueExtraction = {
  /** Ordered extraction sources; the first non-empty value wins. */
  sources: AllocationValueExtractionSource[];
  /**
   * What happens when every source is missing or empty on a matching row. "useFallback" (default)
   * emits the fallback value, which is required in that mode; "nextRule" lets the row fall through
   * to the next rule in the group.
   *
   * @default OnMissing.UseFallback
   */
  onMissing?: OnMissing;
  /**
   * Literal emitted when every source is missing. Required with onMissing "useFallback" (the
   * default); not allowed with onMissing "nextRule".
   */
  fallback?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const allocationValueExtractionProperties: s.Shape<AllocationValueExtraction> = {
  sources: s.array(s.lazy(() => allocationValueExtractionSourceSchema)),
  onMissing: s.defaulted(onMissingSchema, OnMissing.UseFallback),
  fallback: s.optionalNullable(s.string()),
};

export const allocationValueExtractionInternalSchema: Schema<AllocationValueExtraction> =
  s.object<AllocationValueExtraction>(allocationValueExtractionProperties, {
    additionalProperties: s.json(),
  });

export const allocationValueExtractionSchema: Schema<AllocationValueExtraction> = s.lazySchema(() =>
  s.object<AllocationValueExtraction>(
    {
      ...allocationValueExtractionProperties,
      sources: s
        .array(s.lazy(() => allocationValueExtractionSourceSchema))
        .check(s.minLength(1), s.maxLength(5)),
    },
    { additionalProperties: s.json() },
  ),
);
