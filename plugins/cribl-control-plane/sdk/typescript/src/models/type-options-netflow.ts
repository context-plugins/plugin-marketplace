import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsNetflow = {
  Netflow: "netflow",
} as const;
export type TypeOptionsNetflow = (typeof TypeOptionsNetflow)[keyof typeof TypeOptionsNetflow] | (string & {});

export const typeOptionsNetflowSchema: EnumSchema<TypeOptionsNetflow> =
  s.enumOf<TypeOptionsNetflow>(TypeOptionsNetflow);
