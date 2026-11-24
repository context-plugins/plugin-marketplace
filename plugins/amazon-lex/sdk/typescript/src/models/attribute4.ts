import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The attribute to use to sort the list. */
export const Attribute4 = {
  SlotName: "SlotName",
  LastUpdatedDateTime: "LastUpdatedDateTime",
} as const;
export type Attribute4 = (typeof Attribute4)[keyof typeof Attribute4] | (string & {});

export const attribute4Schema: EnumSchema<Attribute4> = s.enumOf<Attribute4>(Attribute4);
