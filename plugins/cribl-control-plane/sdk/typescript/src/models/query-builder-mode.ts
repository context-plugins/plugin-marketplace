import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Query builder mode */
export const QueryBuilderMode = {
  Simple: "simple",
  Xml: "xml",
} as const;
export type QueryBuilderMode = (typeof QueryBuilderMode)[keyof typeof QueryBuilderMode] | (string & {});

export const queryBuilderModeSchema: EnumSchema<QueryBuilderMode> =
  s.enumOf<QueryBuilderMode>(QueryBuilderMode);
