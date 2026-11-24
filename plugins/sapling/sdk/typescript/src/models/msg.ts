import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Msg = {
  Alive: "alive",
} as const;
export type Msg = (typeof Msg)[keyof typeof Msg] | (string & {});

export const msgSchema: EnumSchema<Msg> = s.enumOf<Msg>(Msg);
