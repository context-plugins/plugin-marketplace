import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypePrismaReviewsLocationsApi = {
  WriteReview: "write_review",
  Listing: "listing",
} as const;
export type TypePrismaReviewsLocationsApi =
  | (typeof TypePrismaReviewsLocationsApi)[keyof typeof TypePrismaReviewsLocationsApi]
  | (string & {});

export const typePrismaReviewsLocationsApiSchema: EnumSchema<TypePrismaReviewsLocationsApi> =
  s.enumOf<TypePrismaReviewsLocationsApi>(TypePrismaReviewsLocationsApi);
