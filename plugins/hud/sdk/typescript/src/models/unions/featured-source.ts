import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { featuredSourceResponseSchema, type FeaturedSourceResponse } from "../featured-source-response.js";

export type FeaturedSource = FeaturedSourceResponse;

export const featuredSourceSchema: Schema<FeaturedSource> = s.of<FeaturedSource>(
  s.union([s.lazy(() => featuredSourceResponseSchema)]),
);
