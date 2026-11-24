import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Describes how the route was created */
export const Origin = {
  CreateRouteTable: "CreateRouteTable",
  CreateRoute: "CreateRoute",
  EnableVgwRoutePropagation: "EnableVgwRoutePropagation",
} as const;
export type Origin = (typeof Origin)[keyof typeof Origin] | (string & {});

export const originSchema: EnumSchema<Origin> = s.enumOf<Origin>(Origin);
