import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** New archive status of the conversation */
export const Status13 = {
  Archived: "archived",
} as const;
export type Status13 = (typeof Status13)[keyof typeof Status13] | (string & {});

export const status13Schema: EnumSchema<Status13> = s.enumOf<Status13>(Status13);
