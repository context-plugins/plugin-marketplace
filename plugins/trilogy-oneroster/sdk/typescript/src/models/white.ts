import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const White = {
  True: "true",
  False: "false",
} as const;
export type White = (typeof White)[keyof typeof White] | (string & {});

export const whiteSchema: EnumSchema<White> = s.enumOf<White>(White);
