import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeTypeSchema, type AttributeType } from "./attribute-type.js";

export type SchemaAttribute = {
  /** The name of the dataset field. */
  attributeName?: string;
  /**
   * The data type of the field. For a related time series dataset, other than date, item_id, and
   * forecast dimensions attributes, all attributes should be of numerical type (integer/float).
   */
  attributeType?: AttributeType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const schemaAttributeSchema: Schema<SchemaAttribute> = s.object<SchemaAttribute>(
  {
    attributeName: s.optional(s.string()),
    attributeType: s.optional(s.lazy(() => attributeTypeSchema)),
    _keysMap: {
      attributeName: "AttributeName",
      attributeType: "AttributeType",
    },
  },
  { additionalProperties: s.json() },
);
