import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeSaplingDetectionApi = {
  Person: "person",
  Organization: "organization",
  Location: "location",
  Date: "date",
  Time: "time",
  Money: "money",
  Percent: "percent",
  Quantity: "quantity",
  Product: "product",
  Event: "event",
} as const;
export type TypeSaplingDetectionApi =
  | (typeof TypeSaplingDetectionApi)[keyof typeof TypeSaplingDetectionApi]
  | (string & {});

export const typeSaplingDetectionApiSchema: EnumSchema<TypeSaplingDetectionApi> =
  s.enumOf<TypeSaplingDetectionApi>(TypeSaplingDetectionApi);
