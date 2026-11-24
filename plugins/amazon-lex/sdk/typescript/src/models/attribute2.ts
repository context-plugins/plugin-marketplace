import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The attribute to use to sort the list of intents. */
export const Attribute2 = {
  IntentName: "IntentName",
  LastUpdatedDateTime: "LastUpdatedDateTime",
} as const;
export type Attribute2 = (typeof Attribute2)[keyof typeof Attribute2] | (string & {});

export const attribute2Schema: EnumSchema<Attribute2> = s.enumOf<Attribute2>(Attribute2);
