import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { lineItemSchema, type LineItem } from "./line-item.js";

export type ImsOnerosterGradebookV1P2LineItemsRequest = {
  /** Represents a line item. */
  lineItem: LineItem;
};

export const imsOnerosterGradebookV1P2LineItemsRequestSchema: Schema<ImsOnerosterGradebookV1P2LineItemsRequest> =
  s.object<ImsOnerosterGradebookV1P2LineItemsRequest>({
    lineItem: lineItemSchema,
  });
