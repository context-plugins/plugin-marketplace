import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Field5 = {
  Uri: "uri",
  PlaceActionType: "placeActionType",
  IsPreferred: "isPreferred",
} as const;
export type Field5 = (typeof Field5)[keyof typeof Field5] | (string & {});

export const field5Schema: EnumSchema<Field5> = s.enumOf<Field5>(Field5);
