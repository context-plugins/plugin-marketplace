import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ParentType = {
  App: "app",
  RecordGroup: "recordGroup",
  Folder: "folder",
  Record: "record",
} as const;
export type ParentType = (typeof ParentType)[keyof typeof ParentType] | (string & {});

export const parentTypeSchema: EnumSchema<ParentType> = s.enumOf<ParentType>(ParentType);
