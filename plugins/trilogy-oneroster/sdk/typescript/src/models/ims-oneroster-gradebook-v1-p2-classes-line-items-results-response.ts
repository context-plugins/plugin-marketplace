import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse = {
  results: Result[];
  totalCount: number;
  pageCount: number;
  pageNumber: number;
  offset: number;
  limit: number;
};

export const imsOnerosterGradebookV1P2ClassesLineItemsResultsResponseSchema: Schema<ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse> =
  s.object<ImsOnerosterGradebookV1P2ClassesLineItemsResultsResponse>({
    results: s.array(s.lazy(() => resultSchema)),
    totalCount: s.float64(),
    pageCount: s.float64(),
    pageNumber: s.float64(),
    offset: s.float64(),
    limit: s.float64(),
  });
