import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detectedItemsSchema, type DetectedItems } from "./detected-items.js";
import { verdict3Schema, type Verdict3 } from "./verdict3.js";

/** Result of the Rich Results analysis. Absent if there are no rich results found. */
export type RichResultsInspectionResult2 = {
  /** High-level rich results inspection result for this URL. */
  verdict?: Verdict3;
  /**
   * A list of zero or more rich results detected on this page. Rich results that cannot even be
   * parsed due to syntactic issues will not be listed here.
   */
  detectedItems?: DetectedItems[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const richResultsInspectionResult2Schema: Schema<RichResultsInspectionResult2> =
  s.object<RichResultsInspectionResult2>(
    {
      verdict: s.optional(s.lazy(() => verdict3Schema)),
      detectedItems: s.optional(s.array(s.lazy(() => detectedItemsSchema))),
    },
    { additionalProperties: s.json() },
  );
