import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a parent assessment line item. */
export type ParentAssessmentLineItem = {
  sourcedId: string;
};

export const parentAssessmentLineItemSchema: Schema<ParentAssessmentLineItem> =
  s.object<ParentAssessmentLineItem>({
    sourcedId: s.string(),
  });
