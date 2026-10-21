import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { nextcursorModelSchema, type NextcursorModel } from "./unions/nextcursor-model.js";

/** List samples response. */
export type ListSamplesResponse = {
  /** List of items. */
  data: Record<string, unknown>[][];
  /** Next cursor to use for pagination. `None` indicates no more items to fetch. */
  nextCursor?: NextcursorModel;
};

export const listSamplesResponseSchema: Schema<ListSamplesResponse> = s.object<ListSamplesResponse>({
  data: s.array(s.array(s.record(s.string(), s.unknown()))),
  nextCursor: s.optional(s.lazy(() => nextcursorModelSchema)),
});
