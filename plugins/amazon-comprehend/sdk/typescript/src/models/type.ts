import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The entity type. For entity detection using the built-in model, this field contains one of the
 * standard entity types listed below. For custom entity detection, this field contains one of the
 * entity types that you specified when you trained your custom model.
 */
export const Type = {
  Person: "PERSON",
  Location: "LOCATION",
  Organization: "ORGANIZATION",
  CommercialItem: "COMMERCIAL_ITEM",
  Event: "EVENT",
  Date: "DATE",
  Quantity: "QUANTITY",
  Title: "TITLE",
  Other: "OTHER",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
