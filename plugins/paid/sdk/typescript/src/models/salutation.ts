import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Salutation = {
  Mr: "Mr.",
  Mrs: "Mrs.",
  Miss: "Miss",
  Ms: "Ms.",
  Dr: "Dr.",
  Prof: "Prof.",
} as const;
export type Salutation = (typeof Salutation)[keyof typeof Salutation] | (string & {});

export const salutationSchema: EnumSchema<Salutation> = s.enumOf<Salutation>(Salutation);
