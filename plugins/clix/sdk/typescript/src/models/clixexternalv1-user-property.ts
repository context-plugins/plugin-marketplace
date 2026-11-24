import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  Clixexternalv1UserPropertyType,
  clixexternalv1UserPropertyTypeSchema,
} from "./clixexternalv1-user-property-type.js";

export type Clixexternalv1UserProperty = {
  name?: string;
  /** @default Clixexternalv1UserPropertyType.UserPropertyTypeString */
  type?: Clixexternalv1UserPropertyType;
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clixexternalv1UserPropertySchema: Schema<Clixexternalv1UserProperty> =
  s.object<Clixexternalv1UserProperty>(
    {
      name: s.optional(s.string()),
      type: s.defaulted(
        clixexternalv1UserPropertyTypeSchema,
        Clixexternalv1UserPropertyType.UserPropertyTypeString,
      ),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
