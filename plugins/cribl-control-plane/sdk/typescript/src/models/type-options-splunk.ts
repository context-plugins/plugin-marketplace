import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsSplunk = {
  Splunk: "splunk",
} as const;
export type TypeOptionsSplunk = (typeof TypeOptionsSplunk)[keyof typeof TypeOptionsSplunk] | (string & {});

export const typeOptionsSplunkSchema: EnumSchema<TypeOptionsSplunk> =
  s.enumOf<TypeOptionsSplunk>(TypeOptionsSplunk);
