import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Public1 = {
  Owner: "owner",
  Editor: "editor",
  Viewer: "viewer",
} as const;
export type Public1 = (typeof Public1)[keyof typeof Public1] | (string & {});

export const public1Schema: EnumSchema<Public1> = s.enumOf<Public1>(Public1);
