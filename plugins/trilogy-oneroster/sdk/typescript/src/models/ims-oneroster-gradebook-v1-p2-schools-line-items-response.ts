import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lineItemSchema, type LineItem } from "./line-item.js";

export type ImsOnerosterGradebookV1P2SchoolsLineItemsResponse = {
  lineItems: LineItem[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterGradebookV1P2SchoolsLineItemsResponseSchema: Schema<ImsOnerosterGradebookV1P2SchoolsLineItemsResponse> =
  s.object<ImsOnerosterGradebookV1P2SchoolsLineItemsResponse>({
    lineItems: s.array(s.lazy(() => lineItemSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
