import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourcedIdPairsSchema, type SourcedIdPairs } from "./sourced-id-pairs.js";

export type ImsOnerosterGradebookV1P2LineItemsResultsResponse = {
  sourcedIdPairs: SourcedIdPairs;
};

export const imsOnerosterGradebookV1P2LineItemsResultsResponseSchema: Schema<ImsOnerosterGradebookV1P2LineItemsResultsResponse> =
  s.object<ImsOnerosterGradebookV1P2LineItemsResultsResponse>({
    sourcedIdPairs: sourcedIdPairsSchema,
  });
