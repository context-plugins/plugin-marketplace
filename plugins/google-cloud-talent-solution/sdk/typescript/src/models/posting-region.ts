import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The job PostingRegion (for example, state, country) throughout which the job is available. If
 * this field is set, a LocationFilter in a search query within the job region finds this job
 * posting if an exact location match isn't specified. If this field is set to PostingRegion.NATION
 * or PostingRegion.ADMINISTRATIVE_AREA, setting job Job.addresses to the same location level as
 * this field is strongly recommended.
 */
export const PostingRegion = {
  PostingRegionUnspecified: "POSTING_REGION_UNSPECIFIED",
  AdministrativeArea: "ADMINISTRATIVE_AREA",
  Nation: "NATION",
  Telecommute: "TELECOMMUTE",
} as const;
export type PostingRegion = (typeof PostingRegion)[keyof typeof PostingRegion] | (string & {});

export const postingRegionSchema: EnumSchema<PostingRegion> = s.enumOf<PostingRegion>(PostingRegion);
