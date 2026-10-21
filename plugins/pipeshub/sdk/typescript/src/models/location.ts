import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Location = {
  KbRoot: "kb_root",
  Folder: "folder",
} as const;
export type Location = (typeof Location)[keyof typeof Location] | (string & {});

export const locationSchema: EnumSchema<Location> = s.enumOf<Location>(Location);
