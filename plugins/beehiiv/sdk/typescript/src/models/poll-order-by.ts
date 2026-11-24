import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PollOrderBy = {
  Created: "created",
  Name: "name",
} as const;
export type PollOrderBy = (typeof PollOrderBy)[keyof typeof PollOrderBy] | (string & {});

export const pollOrderBySchema: EnumSchema<PollOrderBy> = s.enumOf<PollOrderBy>(PollOrderBy);
