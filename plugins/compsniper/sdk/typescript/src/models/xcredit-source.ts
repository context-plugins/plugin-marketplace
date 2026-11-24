import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const XCreditSource = {
  Credits: "credits",
} as const;
export type XCreditSource = (typeof XCreditSource)[keyof typeof XCreditSource] | (string & {});

export const xCreditSourceSchema: EnumSchema<XCreditSource> = s.enumOf<XCreditSource>(XCreditSource);
