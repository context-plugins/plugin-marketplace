import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typePrismaReviewsLocationsApiSchema,
  type TypePrismaReviewsLocationsApi,
} from "./type-prisma-reviews-locations-api.js";

export type ReviewLink = {
  /** The link. */
  url: string;
  type: TypePrismaReviewsLocationsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reviewLinkSchema: Schema<ReviewLink> = s.object<ReviewLink>(
  {
    url: s.string(),
    type: typePrismaReviewsLocationsApiSchema,
  },
  { additionalProperties: s.json() },
);
