import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of custom property - this governs the search and faceting behavior. Note that
 * MULTIPICKLIST is not yet supported.
 */
export const PropertyType = {
  Text: "TEXT",
  Date: "DATE",
  Int: "INT",
  Userid: "USERID",
  Picklist: "PICKLIST",
  Textlist: "TEXTLIST",
  Multipicklist: "MULTIPICKLIST",
} as const;
export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType] | (string & {});

export const propertyTypeSchema: EnumSchema<PropertyType> = s.enumOf<PropertyType>(PropertyType);
