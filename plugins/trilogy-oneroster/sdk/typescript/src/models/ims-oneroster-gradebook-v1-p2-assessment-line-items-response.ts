import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assessmentLineItemSchema, type AssessmentLineItem } from "./assessment-line-item.js";

export type ImsOnerosterGradebookV1P2AssessmentLineItemsResponse = {
  assessmentLineItems: AssessmentLineItem[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterGradebookV1P2AssessmentLineItemsResponseSchema: Schema<ImsOnerosterGradebookV1P2AssessmentLineItemsResponse> =
  s.object<ImsOnerosterGradebookV1P2AssessmentLineItemsResponse>({
    assessmentLineItems: s.array(s.lazy(() => assessmentLineItemSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
