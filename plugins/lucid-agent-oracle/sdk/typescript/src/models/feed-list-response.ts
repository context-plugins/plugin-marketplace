import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feedSchema, type Feed } from "./feed.js";

export type FeedListResponse = {
  feeds: Feed[];
};

export const feedListResponseSchema: Schema<FeedListResponse> = s.object<FeedListResponse>({
  feeds: s.array(s.lazy(() => feedSchema)),
});
