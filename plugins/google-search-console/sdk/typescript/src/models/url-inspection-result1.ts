import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ampInspectionResult2Schema, type AmpInspectionResult2 } from "./amp-inspection-result2.js";
import {
  indexStatusInspectionResult2Schema,
  type IndexStatusInspectionResult2,
} from "./index-status-inspection-result2.js";
import {
  mobileUsabilityInspectionResult1Schema,
  type MobileUsabilityInspectionResult1,
} from "./mobile-usability-inspection-result1.js";
import {
  richResultsInspectionResult2Schema,
  type RichResultsInspectionResult2,
} from "./rich-results-inspection-result2.js";

/** URL inspection results. */
export type UrlInspectionResult1 = {
  /** Link to Search Console URL inspection. */
  inspectionResultLink?: string;
  /** Result of the index status analysis. */
  indexStatusResult?: IndexStatusInspectionResult2;
  /** Result of the AMP analysis. Absent if the page is not an AMP page. */
  ampResult?: AmpInspectionResult2;
  /** Result of the Mobile usability analysis. */
  mobileUsabilityResult?: MobileUsabilityInspectionResult1;
  /** Result of the Rich Results analysis. Absent if there are no rich results found. */
  richResultsResult?: RichResultsInspectionResult2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const urlInspectionResult1Schema: Schema<UrlInspectionResult1> = s.object<UrlInspectionResult1>(
  {
    inspectionResultLink: s.optional(s.string()),
    indexStatusResult: s.optional(s.lazy(() => indexStatusInspectionResult2Schema)),
    ampResult: s.optional(s.lazy(() => ampInspectionResult2Schema)),
    mobileUsabilityResult: s.optional(s.lazy(() => mobileUsabilityInspectionResult1Schema)),
    richResultsResult: s.optional(s.lazy(() => richResultsInspectionResult2Schema)),
  },
  { additionalProperties: s.json() },
);
