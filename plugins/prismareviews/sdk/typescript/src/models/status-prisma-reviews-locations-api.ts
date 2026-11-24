import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusPrismaReviewsLocationsApi = {
  Active: "active",
  Disconnected: "disconnected",
} as const;
export type StatusPrismaReviewsLocationsApi =
  | (typeof StatusPrismaReviewsLocationsApi)[keyof typeof StatusPrismaReviewsLocationsApi]
  | (string & {});

export const statusPrismaReviewsLocationsApiSchema: EnumSchema<StatusPrismaReviewsLocationsApi> =
  s.enumOf<StatusPrismaReviewsLocationsApi>(StatusPrismaReviewsLocationsApi);
