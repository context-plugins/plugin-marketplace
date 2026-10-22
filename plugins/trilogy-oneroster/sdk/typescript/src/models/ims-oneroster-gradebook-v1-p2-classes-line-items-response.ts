import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { sourcedIdPairsSchema, type SourcedIdPairs } from "./sourced-id-pairs.js";

export type ImsOnerosterGradebookV1P2ClassesLineItemsResponse = {
  sourcedIdPairs: SourcedIdPairs;
};

export const imsOnerosterGradebookV1P2ClassesLineItemsResponseSchema: Schema<ImsOnerosterGradebookV1P2ClassesLineItemsResponse> =
  s.object<ImsOnerosterGradebookV1P2ClassesLineItemsResponse>({
    sourcedIdPairs: sourcedIdPairsSchema,
  });
