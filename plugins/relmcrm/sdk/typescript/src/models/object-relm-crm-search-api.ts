import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ObjectRelmCrmSearchApi = {
  Search: "search",
} as const;
export type ObjectRelmCrmSearchApi =
  | (typeof ObjectRelmCrmSearchApi)[keyof typeof ObjectRelmCrmSearchApi]
  | (string & {});

export const objectRelmCrmSearchApiSchema: EnumSchema<ObjectRelmCrmSearchApi> =
  s.enumOf<ObjectRelmCrmSearchApi>(ObjectRelmCrmSearchApi);
