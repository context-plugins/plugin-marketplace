import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { captureSchema, type Capture } from "./capture.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";
import { previousCursorSchema, type PreviousCursor } from "./unions/previous-cursor.js";

export type CaptureCollection = {
  /** A list of items returned for this request. */
  items: Capture[];
  /** The number of items for this page. @default 20 */
  limit?: number;
  /** The cursor pointing at the next page of items. */
  nextCursor?: NextCursor;
  /** The cursor pointing at the previous page of items. */
  previousCursor?: PreviousCursor;
};

export const captureCollectionSchema: Schema<CaptureCollection> = s.object<CaptureCollection>({
  items: s.array(s.lazy(() => captureSchema)),
  limit: s.defaulted(s.int(), 20),
  nextCursor: s.optional(s.lazy(() => nextCursorSchema)),
  previousCursor: s.optional(s.lazy(() => previousCursorSchema)),
  _keysMap: {
    nextCursor: "next_cursor",
    previousCursor: "previous_cursor",
  },
});
