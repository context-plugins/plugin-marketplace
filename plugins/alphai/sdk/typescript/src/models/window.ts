import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Window = {
  _4H: "4h",
  _24H: "24h",
} as const;
export type Window = (typeof Window)[keyof typeof Window] | (string & {});

export const windowSchema: EnumSchema<Window> = s.enumOf<Window>(Window);
