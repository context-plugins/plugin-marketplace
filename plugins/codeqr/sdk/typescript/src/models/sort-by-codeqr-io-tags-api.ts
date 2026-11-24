import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The field to sort the tags by. */
export const SortByCodeqrIoTagsApi = {
  Name: "name",
  CreatedAt: "createdAt",
} as const;
export type SortByCodeqrIoTagsApi =
  | (typeof SortByCodeqrIoTagsApi)[keyof typeof SortByCodeqrIoTagsApi]
  | (string & {});

export const sortByCodeqrIoTagsApiSchema: EnumSchema<SortByCodeqrIoTagsApi> =
  s.enumOf<SortByCodeqrIoTagsApi>(SortByCodeqrIoTagsApi);
