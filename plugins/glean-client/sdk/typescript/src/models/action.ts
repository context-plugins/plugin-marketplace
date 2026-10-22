import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of activity this represents. */
export const Action = {
  View: "VIEW",
  Edit: "EDIT",
  Search: "SEARCH",
  Comment: "COMMENT",
  Crawl: "CRAWL",
  HistoricalSearch: "HISTORICAL_SEARCH",
  HistoricalView: "HISTORICAL_VIEW",
} as const;
export type Action = (typeof Action)[keyof typeof Action] | (string & {});

export const actionSchema: EnumSchema<Action> = s.enumOf<Action>(Action);
