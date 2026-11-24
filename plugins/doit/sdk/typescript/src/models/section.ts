import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Section = {
  Connections: "connections",
  DatastoreTables: "datastoreTables",
  GlobalVariables: "globalVariables",
} as const;
export type Section = (typeof Section)[keyof typeof Section] | (string & {});

export const sectionSchema: EnumSchema<Section> = s.enumOf<Section>(Section);
