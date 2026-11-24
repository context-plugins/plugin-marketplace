import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The attribute the user is providing feedback about. */
export const Attribute = {
  AttributeUnspecified: "ATTRIBUTE_UNSPECIFIED",
  AttributeEnvironments: "ATTRIBUTE_ENVIRONMENTS",
  AttributeIpAddressRanges: "ATTRIBUTE_IP_ADDRESS_RANGES",
} as const;
export type Attribute = (typeof Attribute)[keyof typeof Attribute] | (string & {});

export const attributeSchema: EnumSchema<Attribute> = s.enumOf<Attribute>(Attribute);
