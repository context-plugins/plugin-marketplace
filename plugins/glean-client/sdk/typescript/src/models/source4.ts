import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Source4 = {
  NativeConference: "NATIVE_CONFERENCE",
  Location: "LOCATION",
  Description: "DESCRIPTION",
} as const;
export type Source4 = (typeof Source4)[keyof typeof Source4] | (string & {});

export const source4Schema: EnumSchema<Source4> = s.enumOf<Source4>(Source4);
