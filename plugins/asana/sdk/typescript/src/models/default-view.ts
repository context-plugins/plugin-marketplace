import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The default view (list, board, calendar, or timeline) of a project. */
export const DefaultView = {
  List: "list",
  Board: "board",
  Calendar: "calendar",
  Timeline: "timeline",
} as const;
export type DefaultView = (typeof DefaultView)[keyof typeof DefaultView] | (string & {});

export const defaultViewSchema: EnumSchema<DefaultView> = s.enumOf<DefaultView>(DefaultView);
