import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { splitInfoSchema, type SplitInfo } from "./split-info.js";
import { nextcursorModelSchema, type NextcursorModel } from "./unions/nextcursor-model.js";

/** List splits response. */
export type ListSplitsResponse = {
  /** List of items. */
  data: SplitInfo[];
  /** Next cursor to use for pagination. `None` indicates no more items to fetch. */
  nextCursor?: NextcursorModel;
};

export const listSplitsResponseSchema: Schema<ListSplitsResponse> = s.object<ListSplitsResponse>({
  data: s.array(s.lazy(() => splitInfoSchema)),
  nextCursor: s.optional(s.lazy(() => nextcursorModelSchema)),
});
