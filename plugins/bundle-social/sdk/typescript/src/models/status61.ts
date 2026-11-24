import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status61 = {
  Draft: "DRAFT",
  Disabled: "DISABLED",
} as const;
export type Status61 = (typeof Status61)[keyof typeof Status61] | (string & {});

export const status61Schema: EnumSchema<Status61> = s.enumOf<Status61>(Status61);
