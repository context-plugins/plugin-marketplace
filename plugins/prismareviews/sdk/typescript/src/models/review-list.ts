import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { reviewInternalSchema, reviewSchema, type Review } from "./review.js";

/** A page of reviews. */
export type ReviewList = {
  data: Review[];
  /** Pass it as `cursor`, with the same filters, for the next page. `null` on the last page. */
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const reviewListProperties: s.Shape<ReviewList> = {
  data: s.array(s.lazy(() => reviewInternalSchema)),
  nextCursor: s.nullable(s.string()),
  _keysMap: {
    nextCursor: "next_cursor",
  },
};

export const reviewListInternalSchema: Schema<ReviewList> = s.object<ReviewList>(reviewListProperties, {
  additionalProperties: s.json(),
});

export const reviewListSchema: Schema<ReviewList> = s.lazySchema(() =>
  s.object<ReviewList>(
    {
      ...reviewListProperties,
      data: s.array(s.lazy(() => reviewSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
