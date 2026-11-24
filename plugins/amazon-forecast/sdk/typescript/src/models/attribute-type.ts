import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The data type of the field. For a related time series dataset, other than date, item_id, and
 * forecast dimensions attributes, all attributes should be of numerical type (integer/float).
 */
export const AttributeType = {
  String: "string",
  Integer: "integer",
  Float: "float",
  Timestamp: "timestamp",
  Geolocation: "geolocation",
} as const;
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType] | (string & {});

export const attributeTypeSchema: EnumSchema<AttributeType> = s.enumOf<AttributeType>(AttributeType);
