import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Encoding = {
  Utf8: "utf-8",
} as const;
export type Encoding = (typeof Encoding)[keyof typeof Encoding] | (string & {});

export const encodingSchema: EnumSchema<Encoding> = s.enumOf<Encoding>(Encoding);
