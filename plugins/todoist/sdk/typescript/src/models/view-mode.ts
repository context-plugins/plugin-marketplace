import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ViewMode = {
  List: "LIST",
  Board: "BOARD",
  Calendar: "CALENDAR",
  Table: "TABLE",
} as const;
export type ViewMode = (typeof ViewMode)[keyof typeof ViewMode] | (string & {});

export const viewModeSchema: EnumSchema<ViewMode> = s.enumOf<ViewMode>(ViewMode);
