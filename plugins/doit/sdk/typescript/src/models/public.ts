import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Public sharing access level for the budget. */
export const Public = {
  Owner: "owner",
  Editor: "editor",
  Viewer: "viewer",
} as const;
export type Public = (typeof Public)[keyof typeof Public] | (string & {});

export const publicSchema: EnumSchema<Public> = s.enumOf<Public>(Public);
