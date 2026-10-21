import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assessmentLineItemSchema, type AssessmentLineItem } from "./assessment-line-item.js";

export type ImsOnerosterGradebookV1P2AssessmentLineItemsRequest = {
  /** Represents an assessment line item. */
  assessmentLineItem: AssessmentLineItem;
};

export const imsOnerosterGradebookV1P2AssessmentLineItemsRequestSchema: Schema<ImsOnerosterGradebookV1P2AssessmentLineItemsRequest> =
  s.object<ImsOnerosterGradebookV1P2AssessmentLineItemsRequest>({
    assessmentLineItem: assessmentLineItemSchema,
  });
