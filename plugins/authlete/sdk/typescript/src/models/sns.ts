import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Sns = {
  Facebook: "FACEBOOK",
} as const;
export type Sns = (typeof Sns)[keyof typeof Sns] | (string & {});

export const snsSchema: EnumSchema<Sns> = s.enumOf<Sns>(Sns);
