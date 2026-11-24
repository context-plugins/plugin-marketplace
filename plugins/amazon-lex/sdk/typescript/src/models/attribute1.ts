import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The attribute by which to sort the generation request information. You can sort by the following
 * attributes. creationStartTime – The time at which the generation request was created.
 * lastUpdatedTime – The time at which the generation request was last updated.
 */
export const Attribute1 = {
  CreationStartTime: "creationStartTime",
  LastUpdatedTime: "lastUpdatedTime",
} as const;
export type Attribute1 = (typeof Attribute1)[keyof typeof Attribute1] | (string & {});

export const attribute1Schema: EnumSchema<Attribute1> = s.enumOf<Attribute1>(Attribute1);
