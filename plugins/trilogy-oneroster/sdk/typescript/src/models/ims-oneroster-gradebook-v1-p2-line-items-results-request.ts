import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resultSchema, type Result } from "./result.js";

export type ImsOnerosterGradebookV1P2LineItemsResultsRequest = {
  results: Result[];
};

export const imsOnerosterGradebookV1P2LineItemsResultsRequestSchema: Schema<ImsOnerosterGradebookV1P2LineItemsResultsRequest> =
  s.object<ImsOnerosterGradebookV1P2LineItemsResultsRequest>({
    results: s.array(s.lazy(() => resultSchema)),
  });
