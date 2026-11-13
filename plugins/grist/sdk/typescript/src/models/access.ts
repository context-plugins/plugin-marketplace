import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Access = {
  Owners: "owners",
  Editors: "editors",
  Viewers: "viewers",
} as const;
export type Access = (typeof Access)[keyof typeof Access] | (string & {});

export const accessSchema: EnumSchema<Access> = s.enumOf<Access>(Access);
