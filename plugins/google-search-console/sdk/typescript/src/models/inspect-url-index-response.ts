import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { urlInspectionResult1Schema, type UrlInspectionResult1 } from "./url-inspection-result1.js";

/** Index-Status inspection response. */
export type InspectUrlIndexResponse = {
  /** URL inspection results. */
  inspectionResult?: UrlInspectionResult1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inspectUrlIndexResponseSchema: Schema<InspectUrlIndexResponse> =
  s.object<InspectUrlIndexResponse>(
    {
      inspectionResult: s.optional(s.lazy(() => urlInspectionResult1Schema)),
    },
    { additionalProperties: s.json() },
  );
