import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortCosmicRestApiV3ObjectRevisionsApi = {
  CreatedAt: "created_at",
  CreatedAt2: "-created_at",
} as const;
export type SortCosmicRestApiV3ObjectRevisionsApi =
  | (typeof SortCosmicRestApiV3ObjectRevisionsApi)[keyof typeof SortCosmicRestApiV3ObjectRevisionsApi]
  | (string & {});

export const sortCosmicRestApiV3ObjectRevisionsApiSchema: EnumSchema<SortCosmicRestApiV3ObjectRevisionsApi> =
  s.enumOf<SortCosmicRestApiV3ObjectRevisionsApi>(SortCosmicRestApiV3ObjectRevisionsApi);
