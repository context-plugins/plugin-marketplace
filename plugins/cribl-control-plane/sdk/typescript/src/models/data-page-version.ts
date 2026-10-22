import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Serialization format of data pages. Note that some reader implementations use Data page V2's
 * attributes to work more efficiently, while others ignore it.
 */
export const DataPageVersion = {
  DataPageV1: "DATA_PAGE_V1",
  DataPageV2: "DATA_PAGE_V2",
} as const;
export type DataPageVersion = (typeof DataPageVersion)[keyof typeof DataPageVersion] | (string & {});

export const dataPageVersionSchema: EnumSchema<DataPageVersion> = s.enumOf<DataPageVersion>(DataPageVersion);
