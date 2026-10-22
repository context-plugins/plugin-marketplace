import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feed1Schema, type Feed1 } from "./feed1.js";
import { latest1Schema, type Latest1 } from "./unions/latest1.js";

export type FeedDetailResponse = {
  feed: Feed1;
  latest: Latest1;
  methodologyUrl: string;
};

export const feedDetailResponseSchema: Schema<FeedDetailResponse> = s.object<FeedDetailResponse>({
  feed: feed1Schema,
  latest: latest1Schema,
  methodologyUrl: s.string(),
  _keysMap: {
    methodologyUrl: "methodology_url",
  },
});
