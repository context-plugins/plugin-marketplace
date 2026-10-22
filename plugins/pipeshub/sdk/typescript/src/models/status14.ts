import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** New archive status of the conversation */
export const Status14 = {
  Unarchived: "unarchived",
} as const;
export type Status14 = (typeof Status14)[keyof typeof Status14] | (string & {});

export const status14Schema: EnumSchema<Status14> = s.enumOf<Status14>(Status14);
