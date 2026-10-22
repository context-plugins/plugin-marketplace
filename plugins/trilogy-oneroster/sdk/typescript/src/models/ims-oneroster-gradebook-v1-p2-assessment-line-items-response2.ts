import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assessmentLineItemSchema, type AssessmentLineItem } from "./assessment-line-item.js";

export type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2 = {
  /** Represents an assessment line item. */
  assessmentLineItem: AssessmentLineItem;
};

export const imsOnerosterGradebookV1P2AssessmentLineItemsResponse2Schema: Schema<ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2> =
  s.object<ImsOnerosterGradebookV1P2AssessmentLineItemsResponse2>({
    assessmentLineItem: assessmentLineItemSchema,
  });
