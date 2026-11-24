import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** fine = 204×196, standard = 204×98. */
export const Resolution = {
  Fine: "fine",
  Standard: "standard",
} as const;
export type Resolution = (typeof Resolution)[keyof typeof Resolution] | (string & {});

export const resolutionSchema: EnumSchema<Resolution> = s.enumOf<Resolution>(Resolution);
