import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reveal = {
  Emails: "emails",
  Phones: "phones",
} as const;
export type Reveal = (typeof Reveal)[keyof typeof Reveal] | (string & {});

export const revealSchema: EnumSchema<Reveal> = s.enumOf<Reveal>(Reveal);
