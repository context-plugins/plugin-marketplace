import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeSchema, type Attribute } from "./attribute.js";

/** A list of user attribute definitions. */
export type AttributeList = {
  /** Array of attribute objects. */
  data?: Attribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attributeListSchema: Schema<AttributeList> = s.object<AttributeList>(
  {
    data: s.optional(s.array(s.lazy(() => attributeSchema))),
  },
  { additionalProperties: s.json() },
);
