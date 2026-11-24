import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Animations = {
  Disabled: "disabled",
  Allow: "allow",
} as const;
export type Animations = (typeof Animations)[keyof typeof Animations] | (string & {});

export const animationsSchema: EnumSchema<Animations> = s.enumOf<Animations>(Animations);
