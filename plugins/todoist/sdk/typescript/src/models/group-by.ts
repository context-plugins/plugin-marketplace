import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Split the total by the automation that ran, in `groups`. Send `category=automation_run` with it:
 * chat messages carry no automation, so without the filter each chat label becomes a group of its
 * own.
 */
export const GroupBy = {
  Automation: "automation",
} as const;
export type GroupBy = (typeof GroupBy)[keyof typeof GroupBy] | (string & {});

export const groupBySchema: EnumSchema<GroupBy> = s.enumOf<GroupBy>(GroupBy);
