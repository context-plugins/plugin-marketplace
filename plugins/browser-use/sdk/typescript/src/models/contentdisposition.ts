import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Contentdisposition = {
  Attachment: "attachment",
} as const;
export type Contentdisposition = (typeof Contentdisposition)[keyof typeof Contentdisposition] | (string & {});

export const contentdispositionSchema: EnumSchema<Contentdisposition> =
  s.enumOf<Contentdisposition>(Contentdisposition);
