import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The attribute to use to sort the list of slot types. */
export const Attribute3 = {
  SlotTypeName: "SlotTypeName",
  LastUpdatedDateTime: "LastUpdatedDateTime",
} as const;
export type Attribute3 = (typeof Attribute3)[keyof typeof Attribute3] | (string & {});

export const attribute3Schema: EnumSchema<Attribute3> = s.enumOf<Attribute3>(Attribute3);
