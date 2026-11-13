import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProjectViewStyle = {
  List: "LIST",
  Board: "BOARD",
  Calendar: "CALENDAR",
  Table: "TABLE",
} as const;
export type ProjectViewStyle = (typeof ProjectViewStyle)[keyof typeof ProjectViewStyle] | (string & {});

export const projectViewStyleSchema: EnumSchema<ProjectViewStyle> =
  s.enumOf<ProjectViewStyle>(ProjectViewStyle);
