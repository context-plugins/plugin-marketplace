import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Origin type. */
export const Origin1 = {
  Collection: "COLLECTION",
  Connector: "CONNECTOR",
} as const;
export type Origin1 = (typeof Origin1)[keyof typeof Origin1] | (string & {});

export const origin1Schema: EnumSchema<Origin1> = s.enumOf<Origin1>(Origin1);
