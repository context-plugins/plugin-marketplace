import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ObjectRelmCrmDealsApi = {
  Deal: "deal",
} as const;
export type ObjectRelmCrmDealsApi =
  | (typeof ObjectRelmCrmDealsApi)[keyof typeof ObjectRelmCrmDealsApi]
  | (string & {});

export const objectRelmCrmDealsApiSchema: EnumSchema<ObjectRelmCrmDealsApi> =
  s.enumOf<ObjectRelmCrmDealsApi>(ObjectRelmCrmDealsApi);
