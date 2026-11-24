import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseView2 = {
  ViewUnspecified: "VIEW_UNSPECIFIED",
  Basic: "BASIC",
  Full: "FULL",
} as const;
export type ResponseView2 = (typeof ResponseView2)[keyof typeof ResponseView2] | (string & {});

export const responseView2Schema: EnumSchema<ResponseView2> = s.enumOf<ResponseView2>(ResponseView2);
