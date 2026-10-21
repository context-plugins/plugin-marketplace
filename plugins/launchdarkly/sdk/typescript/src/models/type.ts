import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter type. One of [contextAttribute, eventProperty, group] */
export const Type = {
  Group: "group",
  ContextAttribute: "contextAttribute",
  EventProperty: "eventProperty",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
