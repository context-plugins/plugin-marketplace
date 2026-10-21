import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { datasetInfoSchema, type DatasetInfo } from "./dataset-info.js";
import { nextcursorModelSchema, type NextcursorModel } from "./unions/nextcursor-model.js";

/** List datasets response. */
export type ListDatasetsResponse = {
  /** List of items. */
  data: DatasetInfo[];
  /** Next cursor to use for pagination. `None` indicates no more items to fetch. */
  nextCursor?: NextcursorModel;
};

export const listDatasetsResponseSchema: Schema<ListDatasetsResponse> = s.object<ListDatasetsResponse>({
  data: s.array(s.lazy(() => datasetInfoSchema)),
  nextCursor: s.optional(s.lazy(() => nextcursorModelSchema)),
});
