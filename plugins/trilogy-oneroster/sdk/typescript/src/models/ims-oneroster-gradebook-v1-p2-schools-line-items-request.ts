import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lineItemSchema, type LineItem } from "./line-item.js";

export type ImsOnerosterGradebookV1P2SchoolsLineItemsRequest = {
  lineItems: LineItem[];
};

export const imsOnerosterGradebookV1P2SchoolsLineItemsRequestSchema: Schema<ImsOnerosterGradebookV1P2SchoolsLineItemsRequest> =
  s.object<ImsOnerosterGradebookV1P2SchoolsLineItemsRequest>({
    lineItems: s.array(s.lazy(() => lineItemSchema)),
  });
