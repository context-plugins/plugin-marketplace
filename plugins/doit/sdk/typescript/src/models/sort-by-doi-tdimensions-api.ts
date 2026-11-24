import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Sort by `id`, `type`, or `label`. `key` is an alias for `id`. */
export const SortByDoiTDimensionsApi = {
  Id: "id",
  Type: "type",
  Label: "label",
  Key: "key",
} as const;
export type SortByDoiTDimensionsApi =
  | (typeof SortByDoiTDimensionsApi)[keyof typeof SortByDoiTDimensionsApi]
  | (string & {});

export const sortByDoiTDimensionsApiSchema: EnumSchema<SortByDoiTDimensionsApi> =
  s.enumOf<SortByDoiTDimensionsApi>(SortByDoiTDimensionsApi);
