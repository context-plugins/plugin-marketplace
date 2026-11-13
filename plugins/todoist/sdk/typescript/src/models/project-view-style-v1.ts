import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProjectViewStyleV1 = {
  List: "list",
  Board: "board",
  Calendar: "calendar",
  Table: "table",
} as const;
export type ProjectViewStyleV1 = (typeof ProjectViewStyleV1)[keyof typeof ProjectViewStyleV1] | (string & {});

export const projectViewStyleV1Schema: EnumSchema<ProjectViewStyleV1> =
  s.enumOf<ProjectViewStyleV1>(ProjectViewStyleV1);
